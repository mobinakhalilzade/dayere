import {Component, OnInit} from '@angular/core';
import {IConfirmRequest, IGetAllRequest, IRejectRequest, SocialLoanServices} from '../../../../services/socialLoan.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {
  GetAllRequestSocialLoanDto,
  GetAllRequestInput,
  RejectRequestInput,
  ConfirmRequestInput
} from '../../../../interfaces/socialLoan.interface';
import {Location} from '@angular/common';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-loan-application-detail',
  templateUrl: './loan-application-detail.component.html',
  styleUrls: ['./loan-application-detail.component.css']
})
export class LoanApplicationDetailComponent implements OnInit, IGetAllRequest, IRejectRequest, IConfirmRequest {

  dataDetail: GetAllRequestSocialLoanDto | undefined;
  loanId: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private socialLoanService: SocialLoanServices,
    public customErrorHandler: CustomErrorHandlerService,
    private location: Location,
  ) {
    this.socialLoanService = new SocialLoanServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('fundId');
    this.loanId = this.route.snapshot.paramMap.get('loanId');

    const fundId: GetAllRequestInput = {
      fundId: (Number(id))
    };
    this.socialLoanService.getAllRequest(fundId, this);
  }

  onSuccessGetAllRequest(data: GetAllRequestSocialLoanDto[]) {
    this.dataDetail = data.find(x => x.loanId == this.loanId);
  }

  rejectRequest(fundId: number, loanId: number) {
    const command: RejectRequestInput = {
      fundId: fundId,
      loanId: loanId,
      reasonReject: 170401
    };
    this.socialLoanService.rejectRequest(command, this);
  }

  onSuccessRejectRequest(data: any) {
    this.location.back();
  }

  confirmRequest(fundId: number, loanId: number) {
    const command: ConfirmRequestInput = {
      fundId: fundId,
      loanId: loanId
    };
    this.socialLoanService.confirmRequest(command, this);
  }

  onSuccessConfirmRequest(data: any) {
    this.location.back();
  }

}
