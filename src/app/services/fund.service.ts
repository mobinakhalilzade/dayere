import {DataResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {FreeFundDto, FundDto, VotingFundDto} from '../interfaces/fund.interface';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IFund {
  onSuccessGetAll(data: FundDto[]): void;

}

export interface IVotingFund {
  onSuccessGetAllVoting(data: VotingFundDto[]): void;

}

export interface IFreeFund {
  onSuccessGetAllFree(data: FreeFundDto[]): void;

}

@Injectable()

export class FundServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getAll(action: IFund) {
    this.get(this.url.services.Fund.GetAll).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAll(body.result);
        }
        else{
          this.customErrorHandler.showError(body);
        }
      }
    });
  }

  getAllFree(action: IFreeFund) {
    this.get(this.url.services.Fund.GetAllFree).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllFree(body.result);
        }
      }
    });
  }

  getAllVoting(action: IVotingFund) {
    this.get(this.url.services.Fund.GetAllVoting).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllVoting(body.result);
        }
      }
    });
  }

}
