import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BankAccountServices, IGetAllFreeBankAccount} from '../../../../../../services/bankAccount.service';
import {BankAccountDto} from '../../../../../../interfaces/bankAccount.interface';
import {HttpClient} from '@angular/common/http';
import {ICreateNewFund, IInfoNewFund, SocialFundServices} from '../../../../../../services/socialFund.service';
import {CreateNewFundInput, InfoNewFundDto} from '../../../../../../interfaces/socialFund.interface';
import {AmountSeparatorPipe} from '../../../../../../shared/pipes/amountSeparator/amount-separator.pipe';
import {IGetBalance} from '../../../../../../services/wallet.service';
import {GetBalanceDto} from '../../../../../../interfaces/wallet.interface';
import {ProfileServices} from '../../../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../../../services/custom-error-handler.service';
declare var $: any;

@Component({
  selector: 'app-new-fund',
  templateUrl: './new-social-fund.component.html',
  styleUrls: ['./new-social-fund.component.css']
})
export class NewSocialFundComponent implements OnInit, IGetAllFreeBankAccount, IInfoNewFund, IGetBalance, ICreateNewFund {
  // stepper setting
  isLinear = false;
  // new fund form
  newFundVoteForm: any;
  // bank account list in step2 form choose fund account
  bankAccList: BankAccountDto[] = [];
  // for checking withdraw amount in wallet is equal to contribution
  withdrawAmount: any;
  // info data for validation in form from server
  infoNewFund: any;
  funds: any;
  //for disabled buttons
  disabled: boolean = true;
  // using ngModel for data in form
  accountId!: number;
  countDaysVoting!: number;
  adminPercent!: number;
  adminRequestContribution!: number;
  maxContribution!: number;
  minContribution!: number;
  minLoanAmount!: number;
  maxLoanAmount!: number;
  maxInstallment!: number;
  minInstallment!: number;

  // validations messages and booleans for inputs
  //countDaysVoting
  isInvalidCountDaysVoting: boolean = false;
  //contributions
  isInvalidAdminRequestContribution: boolean = false;
  isInvalidMinContribution: boolean = false;
  isInvalidMaxContribution: boolean = false;
  //loan
  isInvalidMaxLoanAmount: boolean = false;
  isInvalidMinLoanAmount: boolean = false;
  //installment
  isInvalidMaxInstallment: boolean = false;
  isInvalidMinInstallment: boolean = false;
// invalid message
  invalidMessage!: string;

  // when all steps complete in step 7 this boolean get true and data show
  completeNewFundForm: boolean = false;

  //voting day suggestions in buttons
  votingTime = [
    {day: '1 روز', active: false, value: 1},
    {day: '3 روز', active: false, value: 3},
    {day: '7 روز', active: false, value: 7}
  ];

  constructor(
    private router: Router,
    private bankAccount: BankAccountServices,
    private socialFund: SocialFundServices,
    public customErrorHandler: CustomErrorHandlerService,
    private profile: ProfileServices,
    private http: HttpClient
  ) {
    this.bankAccount = new BankAccountServices(this.http, this.customErrorHandler);
    this.socialFund = new SocialFundServices(this.http, this.customErrorHandler);
    this.profile = new ProfileServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    this.bankAccount.getAllFree(this);
    this.socialFund.getInfoNewFund(this);
    this.profile.getBalance(this);

    this.newFundVoteForm = new FormGroup({
      name: new FormControl('', Validators.required),
      adminRequestContribution: new FormControl(),
      minContribution: new FormControl(),
      maxContribution: new FormControl(),
      minLoanAmount: new FormControl(),
      maxLoanAmount: new FormControl(),
      turnRatingsType: new FormControl(150201),
      countDaysVoting: new FormControl(),
      adminFirstPriority: new FormControl(false),
      reserveAuto: new FormControl(true),
      accessAdminFundAccountPermission: new FormControl(false),
      adminPercent: new FormControl(),
      sponsorPercent: new FormControl(0),
      customersIdList: new FormControl([7, 89, 87, 9, 59]),
      accountId: new FormControl(),
      minInstallment: new FormControl(),
      maxInstallment: new FormControl(),
      minMemberVoted: new FormControl(5),
    });
  }

  onSuccessGetAllFree(data: BankAccountDto[]) {
    this.bankAccList = data;
  }


  onSuccessGetInfoNewFund(data: InfoNewFundDto) {
    this.infoNewFund = data;
  }

  checkCountDaysVoting(event: any) {
    if (event > 7) {
      this.isInvalidCountDaysVoting = true;
      this.invalidMessage = 'مدت زمان رای گیری از 7 روز نمیتواند بیشتر باشد';
    } else {
      this.isInvalidCountDaysVoting = false;
    }
  }

  setVote(value: number) {
    this.countDaysVoting = value;
    for (let item of this.votingTime) {
      item.active = item.value == value;
    }
  }

  step1(form: FormGroup, stepper: any) {
    if (this.infoNewFund) {
      if (!this.infoNewFund.isPermit) {
        this.customErrorHandler.showError('شما اجازه ایجاد دایره را ندارید');
        return;
      }
    }
    if (form.value.name == '') {
      this.customErrorHandler.showError('لطفا نام دایره را وارد کنید');
      return;
    } else if (this.bankAccList.length == 0) {
      this.customErrorHandler.showError('شما حساب آزاد برای ایجاد دایره ندارید');
      return;
    } else if (!form.value.accountId) {
      this.customErrorHandler.showError('لطفا حساب دایره را انتخاب کنید');
      return;
    } else if (!form.value.countDaysVoting) {
      this.customErrorHandler.showError('لطفا مدت رای گیری را وارد کنید');
      return;
    } else if (form.value.adminPercent == null) {
      this.customErrorHandler.showError('لطفا کارمزد مدیر را وارد کنید');
      return;
    }
    stepper.next();
  }

  onSuccessGetBalance(data: GetBalanceDto) {
    this.withdrawAmount = data.withdrawAmount;
  };

  checkAdminRequestContribution(event: any) {
    if (this.infoNewFund) {
      let minContribution = AmountSeparatorPipe.prototype.transform(this.infoNewFund.minContribution);
      let maxContribution = AmountSeparatorPipe.prototype.transform(this.infoNewFund.maxContribution);
      if (event < this.infoNewFund.minContribution || this.adminRequestContribution < this.infoNewFund.minContribution) {
        this.isInvalidAdminRequestContribution = true;
        this.invalidMessage = 'حداقل حق عضویت دایره :' + minContribution + ' ' + 'ریال';
      } else if (event > this.infoNewFund.maxContribution || this.adminRequestContribution > this.infoNewFund.maxContribution) {
        this.isInvalidAdminRequestContribution = true;
        this.invalidMessage = 'حداکثر حق عضویت دایره :' + maxContribution + ' ' + 'ریال';
      } else {
        this.isInvalidAdminRequestContribution = false;
      }
    }
  }

  checkMinContribution(event: any) {
    if (this.infoNewFund) {
      let minContribution = AmountSeparatorPipe.prototype.transform(this.infoNewFund.minContribution);
      if (event > this.adminRequestContribution) {
        this.isInvalidMinContribution = true;
        this.invalidMessage = 'کف حق عضویت دایره نمیتواند از مبلغ حق عضویت بیشتر باشد';
      } else if (event < this.infoNewFund.minContribution) {
        this.isInvalidMinContribution = true;
        this.invalidMessage = 'کف حق عضویت در دایره' + minContribution + 'ریال';
      } else if (event > this.infoNewFund.maxContribution) {
        this.isInvalidMinContribution = true;
        this.invalidMessage = 'کف حق عضویت دایره نمیتواند از سقف حق عضویت بیشتر باشد';
      } else {
        this.isInvalidMinContribution = false;
      }
    }
  }

  checkMaxContribution(event: any) {
    if (this.infoNewFund) {
      let maxContribution = AmountSeparatorPipe.prototype.transform(this.infoNewFund.maxContribution);
      if (event < this.adminRequestContribution) {
        this.isInvalidMaxContribution = true;
        this.invalidMessage = 'سقف حق عضویت دایره نمیتواند از مبلغ حق عضویت کمتر باشد';
      } else if (event > this.infoNewFund.maxContribution) {
        this.isInvalidMaxContribution = true;
        this.invalidMessage = 'سقف حق عضویت در دایره' + maxContribution + 'ریال';
      } else if (event < this.infoNewFund.minContribution) {
        this.isInvalidMaxContribution = true;
        this.invalidMessage = 'سقف حق عضویت دایره نمیتواند از کف حق عضویت کمتر باشد';
      } else {
        this.isInvalidMaxContribution = false;
      }
    }
  }

  step2(form: FormGroup, stepper: any) {
    if (form.value.adminRequestContribution == 0 || form.value.adminRequestContribution == undefined) {
      this.customErrorHandler.showError('لطفا مبلغ پیشنهادی حق عضویت را وارد کنید');
      return;
    } else if (form.value.minContribution == 0 || form.value.minContribution == undefined) {
      this.customErrorHandler.showError('لطفا کف حق عضویت را وارد کنید');
      return;
    } else if (form.value.maxContribution == 0 || form.value.maxContribution == undefined) {
      this.customErrorHandler.showError('لطفا سقف حق عضویت را وارد کنید');
      return;
    }
    this.setDefaultAmounts();
    stepper.next();
  }

  setDefaultAmounts() {
    this.isInvalidMinLoanAmount = false;
    this.isInvalidMaxLoanAmount = false;
    const minContributionAmount = this.newFundVoteForm.value.minContribution;
    const maxContributionAmount = this.newFundVoteForm.value.maxContribution;
    this.minLoanAmount = minContributionAmount * 2;
    this.maxLoanAmount = maxContributionAmount * 4;
  }

  checkMinLoanAmount(event: any) {
    if (event > this.maxLoanAmount) {
      console.log(event, this.maxLoanAmount);
      this.isInvalidMinLoanAmount = true;
      this.invalidMessage = 'کف مبلغ وام دهی نمیتواند از سقف مبلغ وام دهی بیشتر باشد';
    } else if (event < this.maxContribution) {
      this.isInvalidMinLoanAmount = true;
      this.invalidMessage = 'کف مبلغ وام دهی نمیتواند از کف مبلغ حق عضویت کمتر باشد';
    } else {
      this.isInvalidMinLoanAmount = false;
    }
  }

  checkMaxLoanAmount(event: any) {
    if (event < this.minLoanAmount) {
      this.isInvalidMaxLoanAmount = true;
      this.invalidMessage = 'سقف مبلغ وام دهی نمیتواند از کف مبلغ وام دهی کمتر باشد';
    } else if (event > this.maxContribution * 4) {
      this.isInvalidMaxLoanAmount = true;
      this.invalidMessage = 'سقف مبلغ وام دهی :' + this.maxContribution * 4 + '' + 'ریال';
    } else {
      this.isInvalidMaxLoanAmount = false;
    }
  }

  step3(form: FormGroup, stepper: any) {
    if (form.value.minLoanAmount == 0 || form.value.minLoanAmount == undefined) {
      this.customErrorHandler.showError('لطفا کف مبلغ وام دهی را وارد کنید');
      return;
    } else if (form.value.maxLoanAmount == 0 || form.value.maxLoanAmount == undefined) {
      this.customErrorHandler.showError('لطفا سقف مبلغ وام دهی را وارد کنید');
      return;
    }
    stepper.next();
  }

  checkMinInstallment(event: any) {
    if (event < 3 || event > 24) {
      this.isInvalidMinInstallment = true;
      this.invalidMessage = 'کف تعداد اقساط بین 3 ماه تا 24 ماه می باشد';
    } else {
      this.isInvalidMinInstallment = false;
    }
  }

  checkMaxInstallment(event: any) {
    if (event < 3 || event > 24) {
      this.isInvalidMaxInstallment = true;
      this.invalidMessage = 'سقف تعداد اقساط بین 3 ماه تا 24 ماه می باشد';
    } else {
      this.isInvalidMaxInstallment = false;
    }
  }

  step4(form: FormGroup, stepper: any) {
    if (form.value.minInstallment == 0 || form.value.minInstallment == undefined) {
      this.customErrorHandler.showError('لطفا کف تعداد اقساط را وارد کنید');
      return;
    } else if (form.value.maxInstallment == 0 || form.value.maxInstallment == undefined) {
      this.customErrorHandler.showError('لطفا سقف تعداد اقساط را وارد کنید');
      return;
    } else if (form.value.minInstallment > form.value.maxInstallment) {
      this.customErrorHandler.showError('کف تعداد اقساط از سقف تداد اقساط نمیتواند بیشتر باشد');
      return;
    }
    stepper.next();
  }

  step5(form: FormGroup) {
    this.completeNewFundForm = true;
  }

  newFundVote(form: any) {
    if (form.minContribution > this.withdrawAmount) {
      $('#exampleModal').modal('show');
      return;
    }
    let command: CreateNewFundInput = {
      name: form.name,
      adminRequestContribution: Number(form.adminRequestContribution),
      minContribution: Number(form.minContribution),
      maxContribution: Number(form.maxContribution),
      minLoanAmount: Number(form.minLoanAmount),
      maxLoanAmount: Number(form.maxLoanAmount),
      turnRatingsType: form.turnRatingsType,
      countDaysVoting: Number(form.countDaysVoting),
      adminFirstPriority: form.adminFirstPriority,
      reserveAuto: form.reserveAuto,
      accessAdminFundAccountPermission: form.accessAdminFundAccountPermission,
      adminPercent: form.adminPercent,
      sponsorPercent: form.sponsorPercent,
      customersId: form.customersIdList,
      accountId: form.accountId,
      minInstallment: Number(form.minInstallment),
      maxInstallment: Number(form.maxInstallment),
      minMemberVoted: Number(form.minMemberVoted)
    };
    this.socialFund.createNewFund(command, this);
  }

  confirmCharge() {
    $('#exampleModal').modal('hide');
    this.router.navigate(['/wallet/deposit']).then();
  }

  onSuccessCreateNewFund(data: any) {
    this.router.navigate(['/main/fund']).then();
  };

}
