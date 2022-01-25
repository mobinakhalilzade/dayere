import {
  AuthenticateFinnotechOtpDto,
  AuthenticateFinnotechOtpInput, AuthenticationCheckUserDto,
  AuthenticationCheckUserInput
} from '../interfaces/authenticationUser.interface';
import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IAuthenticationUserServices {
  onSuccessAuthenticationCheckUser(data: AuthenticationCheckUserDto): void;
  onSuccessAuthenticationFinnotechOtp(data: AuthenticateFinnotechOtpDto): void;
  onSuccessAuthenticationConfirm(): void;
}

@Injectable()

export class AuthenticationUserServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  authenticationCheckUser(input: AuthenticationCheckUserInput, action: IAuthenticationUserServices) {
    this.post(this.url.services.Profile.AuthenticateCheckUser, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessAuthenticationCheckUser(body.result);
        }
      }
    });
  }

  authenticationFinnotechOtp(input: AuthenticateFinnotechOtpInput, action: IAuthenticationUserServices) {
    this.post(this.url.services.Profile.AuthenticateFinnotechOtp, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessAuthenticationFinnotechOtp(body.result);
        }
      }
    });
  }

  authenticationConfirm(input: any, action: IAuthenticationUserServices) {
    this.post(this.url.services.Profile.AuthenticateConfirm, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessAuthenticationConfirm();
        }
      }
    });
  }
}
