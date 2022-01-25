import {HttpClient} from '@angular/common/http';
import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {ResetTokenDto, ResetTokenInput, SendOtpDto, SendOtpInput, SignInDto, SignInInput} from '../interfaces/account.interface';
import {GeneralService} from './general.service';
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface ILoginServices {
  onSuccessGetCode(data: SendOtpDto): void;

  onSuccessLogin(data: SignInDto): void;
}

export interface IResetToken {
  onSuccessResetToken(data: ResetTokenDto): void;
}

@Injectable()

export class AccountService extends GeneralService  {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
 ) {
    super(http);
  }

  // canActivate() {
  //   if (this.token == null) {
  //     this.router.navigate(['/']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  getCode(input: SendOtpInput, action: ILoginServices) {
    this.post(this.url.services.Account.SendVerifyCode, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetCode(body.result);
        }
      }
    });
  }

  login(input: SignInInput, action: ILoginServices) {
    this.post(this.url.services.Account.SignIn, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessLogin(body.result);
          this.updateHeader(body.result.token);
        }
      }
    });
  }

}
