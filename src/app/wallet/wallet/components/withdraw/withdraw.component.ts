import {Component, OnInit} from '@angular/core';
import {IGetBalance, IWithdraw, WalletServices} from '../../../../services/wallet.service';
import {HttpClient} from '@angular/common/http';
import {
  CheckWithdrawDto,
  CheckWithdrawInput,
  GetBalanceDto,
  GetWithdrawInfoDto,
  WithdrawInput
} from '../../../../interfaces/wallet.interface';
import {IGetAllBankAccount} from '../../../../services/bankAccount.service';
import {BankAccountDto} from '../../../../interfaces/bankAccount.interface';
import {Router} from '@angular/router';
import {AmountPipe} from '../../../../shared/pipes/amount/amount.pipe';
import {ProfileServices} from '../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit, IWithdraw, IGetAllBankAccount, IGetBalance {
  bankAccounts: BankAccountDto[] = [];
  validAmount: any;
  value: string = '';
  accountId!: number;
  amount!: number;
  isInvalidAmount: boolean = false;
  isInvalidAmountMessage: string = '';
  isSend: boolean = false;
  withdrawInfo: CheckWithdrawDto | undefined;
  walletBalance: any;

  amounts = [
    {amount: 10000000, active: false},
    {amount: 5000000, active: false},
    {amount: 15000000, active: false}
  ];

  constructor(
    private http: HttpClient,
    private walletServices: WalletServices,
    private profileServices: ProfileServices,
    private customErrorHandler: CustomErrorHandlerService,
    private router: Router
  ) {
    // this.walletServices = new WalletServices(this.http);
    // this.profileServices = new ProfileServices(this.http);
  }


//get basic info for valuable amount for withdraw
  ngOnInit(): void {
    this.walletServices.getWithdrawInfo(this);
    this.profileServices.getBalance(this);
    //  new BankAccountServices(this.http).getAll(this);
    this.timer();
  }

  /***
   *
   * @param data:bankAccounts array
   */
  onSuccessGetAll(data: BankAccountDto[]) {
    this.bankAccounts = data;
  }

  /***
   *
   * @param data:If user hasn't permission for withdraw
   */
  onSuccessGetWithdrawInfo(data: GetWithdrawInfoDto) {
    this.validAmount = data;
    if (!this.validAmount.isPermit) {
      this.customErrorHandler.showError('شما اجازه برداشت از حساب خود را ندارید');
    }
  }

  /***
   *
   * @param value:set suggest amount
   */
  setAmount(value: number) {
    this.initialWithdraw(value);
    this.timer();
    this.amount = value;
    for (let item of this.amounts) {
      item.active = item.amount == value;
    }
  }

  onSuccessGetBalance(wallet: GetBalanceDto) {
    this.walletBalance = wallet;
  }

  /***
   *If values change every 3 second send data to calculate withdrawFee,totalAmount
   */
  timer() {
    setTimeout(this.timer, 3000);
    if (this.amount != null) {
      const command: CheckWithdrawInput = {
        amount: this.amount
      };
      this.walletServices.checkWithdraw(command, this);
      this.isSend = false;
    }
  };

  /***
   * check valuable data for withdraw
   */
  initialWithdraw(event: any) {
    let minWithdrawAmount = AmountPipe.prototype.transform(this.validAmount.minWithdrawAmount);
    let maxWithdrawAmount = AmountPipe.prototype.transform(this.validAmount.maxWithdrawAmount);
    if (event < this.validAmount.minWithdrawAmount) {
      this.isInvalidAmount = true;
      this.isInvalidAmountMessage = 'حداقل مبلغ جهت برداشت :' + minWithdrawAmount;
    } else if (event > this.validAmount.maxWithdrawAmount) {
      this.isInvalidAmount = true;
      this.isInvalidAmountMessage = 'حداکثر مبلغ جهت برداشت :' + maxWithdrawAmount;
    } else {
      this.isInvalidAmount = false;
      this.isInvalidAmountMessage = '';
    }
    this.timer();
    this.isSend = event >= this.validAmount.minWithdrawAmount &&
      event <= this.validAmount.maxWithdrawAmount && this.accountId != 0;
  };

  onSuccessCheckWithdraw(data: CheckWithdrawDto) {
    this.withdrawInfo = data;
  }

  withdraw() {
    if (!this.amount && !this.accountId) {
      this.customErrorHandler.showError('لطفا مبلغ برداشتی و حساب بانکی مورد نظر را انتخاب کنید');
      return;
    } else if (this.amount == null) {
      this.customErrorHandler.showError('لطفا مبلغ برداشت را وارد کنید');
      return;
    } else if (this.accountId == null) {
      this.customErrorHandler.showError('لطفا حساب بانکی مورد نظر را انتخاب کنید');
      return;
    }
    if (this.amount > this.walletBalance.withdrawAmount) {
      //danger modal
      $('#dangerModal').modal('show');
      return;
    } else {
      $('#exampleModal').modal('show');
    }

  }

  confirmWithdraw() {
    const command: WithdrawInput = {
      amount: this.amount,
      accountId: this.accountId
    };
    this.walletServices.withdraw(command, this);
    $('#exampleModal').modal('hide');
  }

  onSuccessWithdraw(data: any) {
    this.customErrorHandler.showError('برداشت با موفقیت انجام شد');
    this.router.navigate(['/main/profile']).then();
  }

}
