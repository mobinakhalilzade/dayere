import {Component, OnInit} from '@angular/core';
import {
  GetFundDetailDto,
  GetFundDetailInput,
  GetLendingCalendarDto,
  GetLendingCalendarInput,
  loanInstallments,
} from '../../../../interfaces/socialFund.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IGetFundDetail, IGetLendingCalendar, SocialFundServices} from '../../../../services/socialFund.service';
import {DataSharingService} from '../../../../helper/dataSharing.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.css']
})
export class FundDetailComponent implements OnInit, IGetLendingCalendar, IGetFundDetail {

  fundDetail!: GetFundDetailDto;
  lendingCalendar!: GetLendingCalendarDto;
  loanInstallments!: loanInstallments[];
  index: number = 0;
  lendingCalendarArray: any = [];
  disabled: boolean = false;
  fundId: any;
  loanRequests: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socialFundServices: SocialFundServices,
    private customErrorHandler: CustomErrorHandlerService,
    private dataSharing: DataSharingService
  ) {
  }

  ngOnInit(): void {
    //pas fund id to parent(fund.component.ts) to detect fund guarantees detail
    this.fundId = this.route.snapshot.paramMap.get('id');
    this.dataSharing.fundId.next(this.fundId);

    //get lending calendar with id
    const command: GetLendingCalendarInput = {
      fundId: Number(this.fundId)
    };
    this.socialFundServices.getLendingCalendar(command, this);

    //get fund id from url to get fund detail
    const input: GetFundDetailInput = {
      fundId: (Number(this.fundId))
    };
    this.socialFundServices.getFundDetail(input, this);
  }

  //show lending calendar data
  onSuccessGetLendingCalendar(data: GetLendingCalendarDto[]) {
    this.lendingCalendarArray = data;
    this.lendingCalendar = this.lendingCalendarArray[this.index];
    this.loanInstallments = this.lendingCalendar.loanInstallments;
  }

  //show fund detail data
  onSuccessGetFundDetail(data: GetFundDetailDto) {
    this.fundDetail = data;
  }

  //show calendar in next month
  next() {
    if (this.index == this.lendingCalendarArray.length - 1) {
      this.customErrorHandler.showError('آخرین قسط دایره میباشد');
      return;
    }
    this.index = ++this.index;
    this.lendingCalendar = this.lendingCalendarArray[this.index];
    this.loanInstallments = this.lendingCalendar.loanInstallments;
  }

  //show calendar in previous month
  previous() {
    if (this.index == 0) {
      this.customErrorHandler.showError('اولین قسط دایره میباشد');
      return;
    }
    this.index = --this.index;
    this.lendingCalendar = this.lendingCalendarArray[this.index];
    this.loanInstallments = this.lendingCalendar.loanInstallments;
  }


}
