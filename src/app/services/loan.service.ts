import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {GetAllLoanDto, GetAllRequestLoanDto, GetRepayInfoDto, GetRepayInfoInput, RepayInput} from '../interfaces/loan.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IGetAll {
  onSuccessGetAll(data: GetAllLoanDto[]): void;

}

export interface IGetAllRequest {
  onSuccessGetAllRequest(data: GetAllRequestLoanDto[]): void;

}

export interface IGetRepayInfo {
  onSuccessGetRepayInfo(data: GetRepayInfoDto): void;

}

export interface IRepay {
  onSuccessRepay(data: any): void;

}

@Injectable()

export class LoanServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getAll(action: IGetAll) {
    this.get(this.url.services.Loan.GetAll).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAll(body.result);
        }
      }
    });
  }

  getAllRequest(action: IGetAllRequest) {
    this.get(this.url.services.Loan.GetAllRequest).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllRequest(body.result);
        }
      }
    });
  }

  getRepayInfo(input: GetRepayInfoInput, action: IGetRepayInfo) {
    this.post(this.url.services.Loan.GetRepayInfo, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetRepayInfo(body.result);
        }
      }
    });
  }

  repay(input: RepayInput, action: IRepay) {
    this.post(this.url.services.Loan.Repay, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessRepay(body.result);
        }
      }
    });
  }

}
