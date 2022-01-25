import {Component, OnInit} from '@angular/core';
import {ICharge, WalletServices} from '../../../../services/wallet.service';
import {ChargeIpgListDto, GetChargeGatewayDto, GetChargeGatewayInput, GetChargeInfoDto} from '../../../../interfaces/wallet.interface';
import {HttpClient} from '@angular/common/http';
import {AmountPipe} from '../../../../shared/pipes/amount/amount.pipe';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit, ICharge {
  validAmount: any;
  amount!: number;
  isInvalidAmount: boolean = false;
  isInvalidAmountMessage!: string;
  chargeIpgList: ChargeIpgListDto[] = [];

  amounts = [
    {amount: 10000000, active: false},
    {amount: 5000000, active: false},
    {amount: 15000000, active: false}
  ];

  constructor(
    private http: HttpClient,
    private walletServices: WalletServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.walletServices = new WalletServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    //get wallet data to calculate min and max for deposit
    this.walletServices.getChargeInfo(this);
  }

  onSuccessGetChargeInfo(data: GetChargeInfoDto) {
    this.validAmount = data;
    this.chargeIpgList = data.chargeIpgList;
    if (!data.isPermit) {
      this.customErrorHandler.showError('شما اجازه شارژ کیف پول خود را ندارید');
    }
  }

  //during user enter amount this method checks valuable amount to deposit
  amountChange(amount: any) {
    let minChargeAmount = AmountPipe.prototype.transform(this.validAmount.minChargeAmount);
    let maxChargeAmount = AmountPipe.prototype.transform(this.validAmount.maxChargeAmount);
    if (this.validAmount != null) {
      if (amount < this.validAmount.minChargeAmount) {
        this.isInvalidAmount = true;
        this.isInvalidAmountMessage = 'حداقل مبلغ جهت شارژ :' + minChargeAmount;
      } else if (amount > this.validAmount.maxChargeAmount) {
        this.isInvalidAmount = true;
        this.isInvalidAmountMessage = 'حداکثر مبلغ جهت شارژ :' + maxChargeAmount;
      } else {
        this.isInvalidAmount = false;
        this.isInvalidAmountMessage = '';
      }
    }
  };

  //suggest amount
  setAmount(value: number) {
    this.amountChange(value);
    this.amount = value;
    for (let item of this.amounts) {
      item.active = item.amount == value;
    }
  }

  //send amount to deposit
  deposit() {
    if (this.amount == null) {
      this.customErrorHandler.showError('لطفا مبلغ شارژ را وارد کنید')
      return;
    }
    const command : GetChargeGatewayInput = {
      amount : this.amount
    }
    this.walletServices.getChargeGateway(command, this);
  }

  //navigate to gateway page to pay
  onSuccessGetChargeGateway(data: GetChargeGatewayDto) {
    window.location.href = data.gatewayUrl;
  }



}
