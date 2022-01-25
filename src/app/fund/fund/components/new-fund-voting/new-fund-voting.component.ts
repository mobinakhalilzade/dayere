import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICloseCreateNewFund, IGetFundDetail, IVoteNewFund, SocialFundServices} from '../../../../services/socialFund.service';
import {
  CloseCreateNewFundInput,
  GetFundDetailDto,
  GetFundDetailInput,
  VoteNewFundInput
} from '../../../../interfaces/socialFund.interface';
import {HttpClient} from '@angular/common/http';
import {IGetBalance} from '../../../../services/wallet.service';
import {GetBalanceDto} from '../../../../interfaces/wallet.interface';
import {ProfileServices} from '../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-fund-voting',
  templateUrl: './new-fund-voting.component.html',
  styleUrls: ['./new-fund-voting.component.css']
})
export class NewFundVotingComponent implements OnInit, IGetFundDetail, IVoteNewFund, ICloseCreateNewFund, IGetBalance {

  fundDetail!: GetFundDetailDto;
  alreadyAgreed: boolean = false;
  alreadyDisagreed: boolean = false;
  voteResult!: boolean;
  walletBalance: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socialFundServices: SocialFundServices,
    private profileServices: ProfileServices,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient
  ) {
    this.socialFundServices = new SocialFundServices(this.http, this.customErrorHandler);
    this.profileServices = new ProfileServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    const fundId = this.route.snapshot.paramMap.get('id');
    const command: GetFundDetailInput = {
      fundId: Number(fundId)
    };
    this.socialFundServices.getFundDetail(command, this);
    this.profileServices.getBalance(this);
  }

  onSuccessGetBalance(wallet: GetBalanceDto) {
    this.walletBalance = wallet;
  }

  onSuccessGetFundDetail(data: GetFundDetailDto) {
    if (!data.isAdmin) {
      if (data.memberState == 180101) {
        this.alreadyAgreed = true;
      } else if (data.memberState == 180102) {
        this.alreadyDisagreed = true;
      } else {
        this.alreadyAgreed = false;
        this.alreadyDisagreed = false;
      }
    }
    this.fundDetail = data;
  }

  voteNewFund(vote: boolean) {
    $('#voteNewFundModal').modal('show');
    this.voteResult = vote;
  }

  confirmVoteNewFund() {
    $('#voteNewFundModal').modal('hide');
    if (this.fundDetail.defaultDepositAmount > this.walletBalance.withdrawAmount) {
      $('#warningModal').modal('show');
      return;
    }
    const command: VoteNewFundInput = {
      fundId: this.fundDetail.fundId,
      isAgree: this.voteResult,
      amount: this.fundDetail.defaultDepositAmount
    };
    this.socialFundServices.voteNewFund(command, this);
  }

  charge() {
    $('#warningModal').modal('hide');
    this.router.navigate(['/wallet/deposit']).then();
  }

  onSuccessVoteNewFund(data: any) {
    $('#dangerModal').modal('hide');
    this.ngOnInit();
  }

  closeVotingNewFund() {
    $('#closeVotingNewFundModal').modal('show');

  }

  confirmCloseVotingNewFund() {
    const command : CloseCreateNewFundInput={
      fundId: this.fundDetail.fundId,
      reasonId: 170301
    }
    this.socialFundServices.closeCreateNewFund(command, this);
  }

  onSuccessCloseCreateNewFund(data: any) {
    $('#closeVotingNewFundModal').modal('hide');
    this.router.navigate(['/main/fund']).then();
  }


}
