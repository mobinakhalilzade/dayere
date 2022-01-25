import {Component, OnInit} from '@angular/core';
import {FundServices, IVotingFund} from '../../../../services/fund.service';
import {HttpClient} from '@angular/common/http';
import {FundDto, VotingFundDto} from '../../../../interfaces/fund.interface';
import {GetFundDetailDto, GetFundDetailInput, SetAutoLotteryInput} from '../../../../interfaces/socialFund.interface';
import {IGetFundDetail, ISetAutoLottery, SocialFundServices} from '../../../../services/socialFund.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit, ISetAutoLottery, IGetFundDetail, IVotingFund {
  fundList: FundDto[] = [];
  fundId: any;
  fundNames: any = [];
  allVoting: VotingFundDto[] = [];
  readonly url = environment;

  constructor(
    private http: HttpClient,
    private fundService: FundServices,
    private socialFundServices: SocialFundServices,
    private router: Router,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.fundService = new FundServices(this.http, this.customErrorHandler);
    this.socialFundServices = new SocialFundServices(this.http, this.customErrorHandler);
  }


  ngOnInit(): void {
    this.fundService.getAll(this);
    this.fundService.getAllVoting(this);
  }

  onSuccessGetAllVoting(data: VotingFundDto[]) {
    this.allVoting = data;
  };

  onSuccessGetAll(data: FundDto[]) {
    this.fundList = data;
    for (let item of data) {
      this.fundNames.push(item.name);
    }
  };


  autoLottery(fundId: number) {
    this.fundId = fundId;
    const input: GetFundDetailInput = {
      fundId: Number(this.fundId)
    };
    this.socialFundServices.getFundDetail(input, this);
  }

  onSuccessGetFundDetail(data: GetFundDetailDto) {
    if (!data.isLotteryDone) {
      //show popUp
      if (data.isAdmin) {
        $('#adminLotteryModal').modal('show');
      } else {
        $('#userLotteryModal').modal('show');
      }
    } else {
      this.router.navigate(['/fund/fund-detail', this.fundId]).then();
    }
  }

  confirmLottery() {
    const command: SetAutoLotteryInput = {
      fundId: Number(this.fundId)
    };
    this.socialFundServices.setAutoLottery(command, this);
    $('#adminLotteryModal').modal('hide');
  }

  onSuccessSetAutoLottery(data: any) {
    this.router.navigate(['/fund/fund-detail', this.fundId]).then();
  }


}
