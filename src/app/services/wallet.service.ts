import {DataResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {
  GetChargeInfoDto,
  GetChargeGatewayDto,
  GetChargeGatewayInput,
  CheckWithdrawDto, CheckWithdrawInput, GetBalanceDto, GetWithdrawInfoDto, WithdrawInput,
} from '../interfaces/wallet.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IGetBalance {
  onSuccessGetBalance(data: GetBalanceDto): void;
}

export interface ICharge {
  onSuccessGetChargeInfo(data: GetChargeInfoDto): void;

  onSuccessGetChargeGateway(data: GetChargeGatewayDto): void;
}

export interface IWithdraw {
  onSuccessGetWithdrawInfo(data: GetWithdrawInfoDto): void;

  onSuccessCheckWithdraw(data: CheckWithdrawDto): void;

  onSuccessWithdraw(data: any): void;
}

@Injectable()

export class WalletServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getChargeInfo(action: ICharge) {
    this.get(this.url.services.Wallet.GetChargeInfo).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetChargeInfo(body.result);
        }
      }
    });
  }

  getChargeGateway(input: GetChargeGatewayInput, action: ICharge) {
    this.post(this.url.services.Wallet.GetChargeGateway, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetChargeGateway(body.result);
        }
      }
    });
  }

  getWithdrawInfo(action: IWithdraw) {
    this.get(this.url.services.Wallet.GetWithdrawInfo).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetWithdrawInfo(body.result);
        }
      }
    });
  }

  checkWithdraw(input: CheckWithdrawInput, action: IWithdraw) {
    this.post(this.url.services.Wallet.CheckWithdraw, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessCheckWithdraw(body.result);
        }
      }
    });
  }

  withdraw(input: WithdrawInput, action: IWithdraw) {
    this.post(this.url.services.Wallet.Withdraw, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessWithdraw(body.result);
        }
      }
    });
  }

}
