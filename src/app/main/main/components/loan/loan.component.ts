import {Component, OnInit} from '@angular/core';
import {DataSharingService} from '../../../../helper/dataSharing.service';
import {HttpClient} from '@angular/common/http';
import {IGetAll, IGetAllRequest, LoanServices} from '../../../../services/loan.service';
import {GetAllLoanDto, GetAllRequestLoanDto} from '../../../../interfaces/loan.interface';
import {Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit, IGetAll,IGetAllRequest {

  loans: any = [];
  fundNames: any = [];
  Templist: GetAllLoanDto[] = [];
  allRequestsLoan:any=[];
  constructor(
    private shareData: DataSharingService,
    private http: HttpClient,
    private router: Router,
    private loanService: LoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.loanService = new LoanServices(this.http,this.customErrorHandler);
    this.shareData.filtersSub.subscribe(data => {
      this.loansFilter(data);
    });
  }

  ngOnInit(): void {
    this.loanService.getAll(this);
    this.loanService.getAllRequest(this);
  }

  onSuccessGetAllRequest(data: GetAllRequestLoanDto[]) {
    this.allRequestsLoan = data;

  }

  onSuccessGetAll(data: GetAllLoanDto[]) {
    this.loans = data;
    this.Templist = this.loans;
    for (let item of data) {
      for (let i of item.loanGuarantees) {
        this.fundNames.push(i.description);
      }
    }
  }


  loansFilter(type: number) {
    switch (type) {
      case 190101 :
        this.Templist = this.loans.filter((x: any) => x.loanState == 190101);
        return;
      case 190102 :
        this.Templist = this.loans.filter((x: any) => x.loanState == 190102);
        return;
      case 0 :
        this.Templist = this.loans;
        return;
      default:
        this.Templist = this.loans;
    }
  }



  loanDetail(loanId: number) {
    for (let item of this.loans) {
      if (item.loanId == loanId) {
        if (item.loanState == 190101) {
          this.router.navigate(['/loan/loan-detail', item.loanId]).then();
        } else if (item.loanState == 190102) {
          this.router.navigate(['/loan/closed-loan-detail', item.loanId]).then();
        }
      }
    }
  }

}
