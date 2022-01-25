import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {LoanServices} from '../../../../services/loan.service';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {GetAllLoanDto} from '../../../../interfaces/loan.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-closed-loan-detail',
  templateUrl: './closed-loan-detail.component.html',
  styleUrls: ['./closed-loan-detail.component.css']
})
export class ClosedLoanDetailComponent implements OnInit {

  loanId: any;
  loanDetail: GetAllLoanDto  | undefined;
  installmentNumbers: any = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.loanService = new LoanServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    this.loanId = this.route.snapshot.paramMap.get('id');
    this.loanService.getAll(this);
  }

  onSuccessGetAll(data: GetAllLoanDto[]) {
    this.loanDetail = data.find((x: any) => x.loanId == this.loanId);
  }



}
