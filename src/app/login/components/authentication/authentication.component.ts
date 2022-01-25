import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataValidator} from '../../../shared/validators/data.validator';
import {AuthenticationUserServices, IAuthenticationUserServices} from 'src/app/services/authenticationUser.service';
import {
  AuthenticateFinnotechOtpDto, AuthenticateFinnotechOtpInput, AuthenticationCheckUserDto, AuthenticationCheckUserInput
} from 'src/app/interfaces/authenticationUser.interface';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DataNormalizer} from 'src/app/shared/normalizers/data.normalize';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit, IAuthenticationUserServices {
  authenticationForm: any;
  termsAndIdentityForm: any;
  getCodeForm: any;
  userInfo!: AuthenticateFinnotechOtpDto;
  loading: boolean = false;
  tenantId: any;

  error = {
    hasError: false,
    message: ''
  };
  steps = {
    one: true,
    two: false,
    three: false
  };

  constructor(
    private fb: FormBuilder,
    private validator: DataValidator,
    public http: HttpClient,
    public router: Router,
    private authenticationUserServices: AuthenticationUserServices,
    private dataNormalizer: DataNormalizer,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.authenticationUserServices = new AuthenticationUserServices(this.http, this.customErrorHandler);
    this.dataNormalizer = new DataNormalizer;
  }

  ngOnInit() {

    //authentication form step 1
    this.authenticationForm = this.fb.group({
      birthDate: ['', Validators.required],
      nationalCode: ['', Validators.required],
      shebaNumber: ['', Validators.required]
    });

    //code form step 2
    this.getCodeForm = this.fb.group({
      code: ['', Validators.required]
    });

    //accept Identity form step 3
    this.termsAndIdentityForm = this.fb.group({
      acceptIdentity: [false, Validators.requiredTrue],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get formAuth() {
    return this.authenticationForm.controls;
  }

  get formAccept() {
    return this.termsAndIdentityForm.controls;
  }

  authStep1(form: FormGroup) {
    if (form.invalid) {
      this.customErrorHandler.showError('لطفا فیلد ها را پر کنید');
      return;
    }
    //fill the required field
    let birthDate = this.dataNormalizer.dateNormalize(form.value.birthDate);
    let command: AuthenticationCheckUserInput = {
      nationalCode: form.value.nationalCode,
      shebaNumber: form.value.shebaNumber,
      birthDate: birthDate
    };
    //send data fields to service
    this.authenticationUserServices.authenticationCheckUser(command, this);
    this.loading = true;
  }

  onSuccessAuthenticationCheckUser(data: AuthenticationCheckUserDto): void {
    this.tenantId = data;
    this.steps.one = false;
    this.steps.two = true;
    this.loading = false;
    // switch (data.resumeAuthenticationType) {
    //   case GeneralAppEnum.finnotechAthentication: {
    //   }
    // }
  }

  authStep2(form: FormGroup) {
    if (form.invalid) {
      this.customErrorHandler.showError('لطفا کد ارسالی را وارد کنید');
      return;
    }
    //get sent code from user
    let command: AuthenticateFinnotechOtpInput = {
      code: form.value.code
    };
    //send code to service
    this.authenticationUserServices.authenticationFinnotechOtp(command, this);
    this.loading = true;
  }

  onSuccessAuthenticationFinnotechOtp(data: AuthenticateFinnotechOtpDto): void {
    this.userInfo = data;
    this.steps.two = false;
    this.steps.three = true;
    this.loading = false;
  }

  //auth confirm
  authStep3() {
    this.authenticationUserServices.authenticationConfirm('', this);
  }

  onSuccessAuthenticationConfirm(): void {
    this.router.navigate(['/main/fund']).then();
  }

  termsAndIdentity(form: FormGroup) {
    if (form.invalid) {
      this.customErrorHandler.showError('لطفا قوانین و شرایط دایره را بپذیرید');
      return;
    } else {
      this.authStep3();
    }
  }

}
