import {Component, OnInit} from '@angular/core';
import {ITransactions, TransactionsServices} from '../../../../services/transaction.service';
import {HttpClient} from '@angular/common/http';
import {TransactionsDto, TransactionsInput} from '../../../../interfaces/transaction.interface';
import {DataSharingService} from '../../../../helper/dataSharing.service';
import * as moment from 'jalali-moment';
import {DataNormalizer} from '../../../../shared/normalizers/data.normalize';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, ITransactions {

  constructor(
    private transactionsService: TransactionsServices,
    private http: HttpClient,
    private shareData: DataSharingService,
    private dataNormalizer: DataNormalizer,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.transactionsService = new TransactionsServices(this.http, this.customErrorHandler);
    this.dataNormalizer = new DataNormalizer;

  }

  transactions: TransactionsDto[] = [];
  fromDate: any;
  toDate: any;

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  yyyy = this.today.getFullYear();
  completeToday = this.mm + '/' + this.dd + '/' + this.yyyy;
  toPersianDate = moment(this.completeToday).locale('fa').format('YYYY/MM/DD');

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {

    //when filters are default mode
    const command: TransactionsInput = {
      fromDate: '1398/01/01',
      toDate: this.toPersianDate,
      fromAmount: 0,
      toAmount: 1000000000,
      transactionType: 0,
      recordTake: 10,
      recordSkip: 0,
      ascSort: true
    };
    this.transactionsService.getTransactions(command, this);
    //when filters apply

    this.shareData.transactionsFiltersSub.subscribe(data => {
      if (data.fromDate !== '') {
        this.fromDate = this.dataNormalizer.dateNormalize(data.fromDate);
      }
      if (data.toDate !== '') {
        this.toDate = this.dataNormalizer.dateNormalize(data.toDate);
      }
      const command: TransactionsInput = {
        fromDate: this.fromDate || '1398/01/01',
        toDate: this.toDate || this.toPersianDate,
        fromAmount: data.fromAmount || 0,
        toAmount: data.toAmount || 1000000000,
        transactionType: data.type || 0,
        recordTake: data.recordTake || 10,
        recordSkip: data.recordSkip || 0,
        ascSort: false
      };
      this.transactionsService.getTransactions(command, this);
    });

  }

  onSuccessTransactions(data: TransactionsDto[]) {
    this.transactions = data;
  }


}
