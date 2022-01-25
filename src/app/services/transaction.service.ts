import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {TransactionsDto, TransactionsInput} from '../interfaces/transaction.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface ITransactions {
  onSuccessTransactions(data: TransactionsDto[]): void;

}

@Injectable()

export class TransactionsServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getTransactions(input: TransactionsInput, action: ITransactions) {
    this.post(this.url.services.Wallet.FindTransactions,input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessTransactions(body.result);
        }
      }
    });
  }
}
