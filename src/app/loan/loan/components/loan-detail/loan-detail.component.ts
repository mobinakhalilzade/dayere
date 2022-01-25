import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {IGetAll, IGetRepayInfo, IRepay, LoanServices} from '../../../../services/loan.service';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {GetAllLoanDto, GetRepayInfoDto, GetRepayInfoInput, RepayInput} from '../../../../interfaces/loan.interface';
import {IGetBalance} from '../../../../services/wallet.service';
import {ProfileServices} from '../../../../services/profile.service';
import {GetBalanceDto} from '../../../../interfaces/wallet.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit, IGetAll, IGetRepayInfo, IRepay, IGetBalance {

  loanId:any;
  loanDetail:  GetAllLoanDto | undefined;
  installmentNumbers: any = [];
  walletBalance: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private profileServices: ProfileServices,
    private loanService: LoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.loanService = new LoanServices(this.http,this.customErrorHandler);
    this.profileServices = new ProfileServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    this.loanId = this.route.snapshot.paramMap.get('id');
    this.loanService.getAll(this);
    this.profileServices.getBalance(this);
  }

  onSuccessGetBalance(wallet: GetBalanceDto) {
    this.walletBalance = wallet.withdrawAmount;
  }

  onSuccessGetAll(data: GetAllLoanDto[]) {
    this.loanDetail = data.find((x: any) => x.loanId == this.loanId);
  }

  selectedInstallments(event: any, installmentNumber: number) {
    if (event.checked) {
      this.installmentNumbers.push(installmentNumber);
    } else {
      let index = this.installmentNumbers.indexOf(installmentNumber);
      if (index > -1) {
        this.installmentNumbers.splice(index, 1);
      }
    }
  }

  getRepayInfo() {
    if (this.installmentNumbers.length == 0) {
      this.customErrorHandler.showError('قسط را انتخاب کنید');
      return;
    }
    $('#infoRepayModal').modal('show');
  }

  confirmGetRepayInfo() {
    // @ts-ignore
    const command = new GetRepayInfoInput(this.installmentNumbers, this.loanDetail.loanNumber, 150102);
    this.loanService.getRepayInfo(command, this);
    $('#infoRepayModal').modal('hide');
  }

  onSuccessGetRepayInfo(data: GetRepayInfoDto) {
    if (this.walletBalance < data.totalAmount) {
      $('#repayModal').modal('show');
    } else {
      this.repay();
    }
  }

  charge() {
    this.router.navigate(['/wallet/deposit']).then();
  }

  repay() {
    // @ts-ignore
    const command = new RepayInput(this.installmentNumbers, this.loanDetail.loanNumber, 150102);
    this.loanService.repay(command, this);
  }

  onSuccessRepay(data: any) {
    $('#successRepayModal').modal('show');
  }

  confirmOnSuccessRepay() {
    $('#successRepayModal').modal('hide');
    this.router.navigate(['/main/loan']).then();

  }
}
