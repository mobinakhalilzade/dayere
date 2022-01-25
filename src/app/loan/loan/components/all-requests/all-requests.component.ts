import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGetAllRequest, LoanServices} from '../../../../services/loan.service';
import {GetAllRequestLoanDto} from '../../../../interfaces/loan.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit, IGetAllRequest {

  allRequestsLoan: GetAllRequestLoanDto[] = [];
  allConfirm: boolean = false;
  allReject: boolean = false;
  nothing: boolean = false;

  constructor(
    private http: HttpClient,
    private loanService: LoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.loanService = new LoanServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    this.loanService.getAllRequest(this);
  }

  onSuccessGetAllRequest(data: GetAllRequestLoanDto[]) {
    this.allRequestsLoan = data;
    for (let item of data) {
      if (item.loanGuarantees.every(x => x.socialLoanState == 190202)) {
        this.allConfirm = true;
        this.allReject = false;
        this.nothing = false;
      } else if (item.loanGuarantees.every(x => x.socialLoanState == 190203)) {
        this.allReject = true;
        this.allConfirm = false;
        this.nothing = false;
      } else {
        this.nothing = true;
        this.allConfirm = false;
        this.allReject = false;
      }
    }
  }


}
