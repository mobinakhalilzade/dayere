import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {ProfileDto} from '../interfaces/profile.interface';
import {GetBalanceDto} from '../interfaces/wallet.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IProfile {
  onSuccessProfile(data: ProfileDto): void;

  onSuccessGetBalance(data: GetBalanceDto): void;

}

export interface IGetBalance {
  onSuccessGetBalance(data: GetBalanceDto): void;

}

@Injectable()

export class ProfileServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getProfile(action: IProfile) {
    this.get(this.url.services.Profile.Get).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessProfile(body.result);
        }
      }
    });
  }

  getBalance(action: IGetBalance) {
    this.get(this.url.services.Wallet.GetBalance).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetBalance(body.result);
        }
      }
    });
  }
}
