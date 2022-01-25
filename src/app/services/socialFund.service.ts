import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {
  CloseCreateNewFundInput,
  CreateNewFundInput,
  GetAllMembersDto,
  GetAllMembersInput,
  GetFundDetailDto,
  GetFundDetailInput, GetGuaranteeDetailDto, GetGuaranteeDetailInput, GetLendingCalendarDto, GetLendingCalendarInput,
  InfoNewFundDto, SetAutoLotteryInput, VoteNewFundInput
} from '../interfaces/socialFund.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IInfoNewFund {
  onSuccessGetInfoNewFund(data: InfoNewFundDto): void;

}

export interface ICreateNewFund {
  onSuccessCreateNewFund(data: any): void;

}

export interface IGetAllMembers {
  onSuccessGetAllMembers(data: GetAllMembersDto[]): void;

}

export interface IGetFundDetail {
  onSuccessGetFundDetail(data: GetFundDetailDto): void;

}

export interface IGetLendingCalendar {
  onSuccessGetLendingCalendar(data: GetLendingCalendarDto[]): void;

}

export interface IVoteNewFund {
  onSuccessVoteNewFund(data: any): void;

}

export interface ICloseCreateNewFund {
  onSuccessCloseCreateNewFund(data: any): void;

}

export interface IGetGuaranteeDetail {
  onSuccessGetGuaranteeDetail(data: GetGuaranteeDetailDto): void;

}
export interface ISetAutoLottery {
  onSuccessSetAutoLottery(data: any): void;

}

@Injectable()

export class SocialFundServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getInfoNewFund(action: IInfoNewFund) {
    this.get(this.url.services.SocialFundManage.GetNewFundInfo).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetInfoNewFund(body.result);
        }
      }
    });
  }

  createNewFund(input: CreateNewFundInput, action: ICreateNewFund) {
    this.post(this.url.services.SocialFundManage.CreateNewFund, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessCreateNewFund(body.result);
        }
      }
    });
  }

  getAllMembers(input: GetAllMembersInput, action: IGetAllMembers) {
    this.post(this.url.services.SocialFund.GetAllMembers, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllMembers(body.result);
        }
      }
    });
  }


  getFundDetail(input: GetFundDetailInput, action: IGetFundDetail) {
    this.post(this.url.services.SocialFund.GetFundDetail, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetFundDetail(body.result);
        }
      }
    });
  }

  getLendingCalendar(input: GetLendingCalendarInput, action: IGetLendingCalendar) {
    this.post(this.url.services.SocialFund.GetLendingCalendar, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetLendingCalendar(body.result);
        }
      }
    });
  }

  voteNewFund(input: VoteNewFundInput, action: IVoteNewFund) {
    this.post(this.url.services.SocialFund.VoteNewFund, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessVoteNewFund(body.result);
        }
      }
    });
  }

  closeCreateNewFund(input: CloseCreateNewFundInput, action: ICloseCreateNewFund) {
    this.post(this.url.services.SocialFundManage.CloseCreateNewFund, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessCloseCreateNewFund(body.result);
        }
      }
    });
  }

  getGuaranteeDetail(input: GetGuaranteeDetailInput, action: IGetGuaranteeDetail) {
    this.post(this.url.services.SocialFund.GetGuaranteeDetail, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetGuaranteeDetail(body.result);
        }
      }
    });
  }


  setAutoLottery(input: SetAutoLotteryInput, action: ISetAutoLottery) {
    this.post(this.url.services.SocialFundManage.SetAutoLottery, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessSetAutoLottery(body.result);
        }
      }
    });
  }
}
