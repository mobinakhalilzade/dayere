import {Component, OnInit} from '@angular/core';
import {FundServices, IVotingFund} from '../../../../services/fund.service';
import {HttpClient} from '@angular/common/http';
import {VotingFundDto} from '../../../../interfaces/fund.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit, IVotingFund {

  allVoting:  VotingFundDto[] = [];

  constructor(
    private fundService: FundServices,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient,
  ) {
    this.fundService = new FundServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    this.fundService.getAllVoting(this);
  //  this.fundService.getAll1();
  }

  onSuccessGetAllVoting(data: VotingFundDto[]) {
    this.allVoting = data;
  };



}
