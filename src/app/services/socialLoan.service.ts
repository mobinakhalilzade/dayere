import {DataResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {
  CalculateDto,
  CalculateInput,
  CancelReserveInput, ConfirmRequestInput,
  ConfirmReserveInput, GetAllSocialLoanDto,
  GetAllInput, GetAllRequestSocialLoanDto,
  GetAllRequestInput, RejectRequestInput,
  ReserveInput
} from '../interfaces/socialLoan.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface ICalculate {
  onSuccessCalculate(data: CalculateDto): void;

}

export interface IReserve {
  onSuccessReserve(data: any): void;

}

export interface ICancelReserve {
  onSuccessCancelReserve(data: any): void;

}

export interface IConfirmReserve {
  onSuccessConfirmReserve(data: any): void;

}

export interface IGetAll {
  onSuccessGetAll(data: GetAllSocialLoanDto[]): void;

}

export interface IGetAllRequest {
  onSuccessGetAllRequest(data: GetAllRequestSocialLoanDto[]): void;
}

export interface IConfirmRequest {
  onSuccessConfirmRequest(data: any): void;

}

export interface IRejectRequest {
  onSuccessRejectRequest(data: any): void;

}

@Injectable()

export class SocialLoanServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  calculate(input: CalculateInput, action: ICalculate) {
    this.post(this.url.services.SocialLoan.Calculate, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessCalculate(body.result);
        }
      }
    });
  }

  reserve(input: ReserveInput, action: IReserve) {
    this.post(this.url.services.SocialLoan.Reserve, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessReserve(body.result);
        }
      }
    });
  }

  cancelReserve(input: CancelReserveInput, action: ICancelReserve) {
    this.post(this.url.services.SocialLoan.CancelReserve, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessCancelReserve(body.result);
        }
      }
    });
  }

  confirmReserve(input: ConfirmReserveInput, action: IConfirmReserve) {
    this.post(this.url.services.SocialLoan.ConfirmReserve, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessConfirmReserve(body.result);
        }
      }
    });
  }

  getAll(input: GetAllInput, action: IGetAll) {
    this.post(this.url.services.SocialLoanManage.GetAll, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAll(body.result);
        }
      }
    });
  }

  getAllRequest(input: GetAllRequestInput, action: IGetAllRequest) {
    this.post(this.url.services.SocialLoanManage.GetAllRequest, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllRequest(body.result);
        }
      }
    });
  }

  confirmRequest(input: ConfirmRequestInput, action: IConfirmRequest) {
    this.post(this.url.services.SocialLoanManage.ConfirmRequest, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessConfirmRequest(body.result);
        }
      }
    });
  }

  rejectRequest(input: RejectRequestInput, action: IRejectRequest) {
    this.post(this.url.services.SocialLoanManage.RejectRequest, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessRejectRequest(body.result);
        }
      }
    });
  }

}
