import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {
  GetAllInput,
  GetAllRequestInput,
  GetAllRequestSocialLoanDto,
  GetAllSocialLoanDto
} from '../../../../interfaces/socialLoan.interface';
import {IGetAll, IGetAllRequest, SocialLoanServices} from '../../../../services/socialLoan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-loans-management',
  templateUrl: './loans-management.component.html',
  styleUrls: ['./loans-management.component.css']
})
export class LoansManagementComponent implements OnInit, IGetAll, IGetAllRequest {

  requestedLoans: GetAllRequestSocialLoanDto [] = [];
  ongoingLoans: GetAllSocialLoanDto[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private socialLoanService: SocialLoanServices,
    public customErrorHandler: CustomErrorHandlerService
  ) {
    this.socialLoanService = new SocialLoanServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    const command: GetAllInput = {
      fundId: Number(id)
    };
    this.socialLoanService.getAll(command, this);

    const fundId: GetAllRequestInput = {
      fundId: Number(id)
    };
    this.socialLoanService.getAllRequest(fundId, this);
  }

  onSuccessGetAll(data: GetAllSocialLoanDto[]) {
    this.ongoingLoans = data;
  }

  onSuccessGetAllRequest(data: GetAllRequestSocialLoanDto[]) {
    this.requestedLoans = data;
  }


}
