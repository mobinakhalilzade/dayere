import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataValidator} from '../../../shared/validators/data.validator';
import {SendOtpDto, SendOtpInput, SignInDto, SignInInput} from 'src/app/interfaces/account.interface';
import {AccountService, ILoginServices,} from 'src/app/services/account.service';
import {HttpClient} from '@angular/common/http';
import {IProfile, ProfileServices} from '../../../services/profile.service';
import {ProfileDto} from '../../../interfaces/profile.interface';
import {GetBalanceDto} from '../../../interfaces/wallet.interface';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, ILoginServices, IProfile {
  loginForm: any;
  loading: boolean = false;

  code = {
    sent: false,
    resend: false,
    countdown: 0,
    value: 0
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validator: DataValidator,
    private http: HttpClient,
    private accountService: AccountService,
    public customErrorHandler: CustomErrorHandlerService,
    private profileService: ProfileServices
  ) {
    this.accountService = new AccountService(this.http, this.customErrorHandler);
    this.profileService = new ProfileServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    //login form
    this.loginForm = this.fb.group({
      mobile: [{value: '', disabled: this.code.sent}, Validators.required],
      code: ['', Validators.required]
    });
  }

  //send phone number for get code
  /***
   *
   * @param form : phone number
   */
  getCode(form: any) {
    if (!this.validator.mobileValid(form.mobile)) {
      this.customErrorHandler.showError('شماره وارد شده صحیح نمیباشد.');
      return;
    }
    this.loading = true;
    let command: SendOtpInput = {
      mobile: form.mobile,
      uniqueDeviceCode: ''
    };
    this.accountService.getCode(command, this);
  }

  //code is sent
  /***
   *
   * @param data:countDown for enter the code
   */
  onSuccessGetCode(data: SendOtpDto): void {
    this.loading = false;
    this.code.countdown = data.second;
    this.code.sent = true;
  }

  //login with code and phone number
  /***
   *
   * @param form: hte code must have 4 character and then send phone number,sent code
   */
  login(form: any) {
    if (form.code.length !== 4) {
      this.customErrorHandler.showError('کد وارد شده باید شامل 4 عدد باشد.');
      return;
    }
    let command: SignInInput = {
      mobile: form.mobile,
      code: form.code,
      uniqueDeviceCode: ''
    };
    this.accountService.login(command, this);
  }

  //save token and refresh token in localStorage and navigate to intro page
  /***
   *
   * @param data:token and refresh token that save in local storage
   */
  onSuccessLogin(data: SignInDto): void {
    localStorage.setItem('Token', data.token);
    localStorage.setItem('RefreshToken', data.refreshToken);
    this.profileService.getProfile(this);
  }

  onSuccessProfile(data: ProfileDto) {

    if (data.customerId !== 0) {
      this.router.navigate(['/main/fund']).then();
    } else {
      this.router.navigate(['/login/intro']).then();
    }
  }

  onSuccessGetBalance(data: GetBalanceDto) {
  }


}
