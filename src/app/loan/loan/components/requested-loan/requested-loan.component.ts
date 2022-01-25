import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGetAllRequest, LoanServices} from '../../../../services/loan.service';
import {GetAllRequestLoanDto} from '../../../../interfaces/loan.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {CancelReserveInput, ConfirmReserveInput} from '../../../../interfaces/socialLoan.interface';
import {ICancelReserve, IConfirmReserve, SocialLoanServices} from '../../../../services/socialLoan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-requested-loans',
  templateUrl: './requested-loan.component.html',
  styleUrls: ['./requested-loan.component.css']
})
export class RequestedLoanComponent implements OnInit, IGetAllRequest, IConfirmReserve, ICancelReserve {

  requestLoan: GetAllRequestLoanDto | undefined;
  id: any;
  rejectedLoan: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanServices,
    private socialLoanService: SocialLoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.loanService = new LoanServices(this.http, this.customErrorHandler);
    this.socialLoanService = new SocialLoanServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loanService.getAllRequest(this);
  }

  onSuccessGetAllRequest(data: GetAllRequestLoanDto[]) {
    this.requestLoan = data.find((x: any) => x.fundId == this.id);

    // @ts-ignore
    if (this.requestLoan.loanGuarantees.every((x: any) => x.socialLoanState == 190202)) {
      // all confirm
    } else {
      // @ts-ignore
      this.rejectedLoan = !!this.requestLoan.loanGuarantees.every((x: any) => x.socialLoanState == 190203);
    }
  }


  reserveState() {
    // @ts-ignore
    const loanNumber = this.requestLoan.loanNumber;
    // @ts-ignore
    if (this.requestLoan.loanGuarantees.every((x: any) => x.socialLoanState == 190202)) {
      const command: ConfirmReserveInput = {
        loanNumber: loanNumber
      };
      this.socialLoanService.confirmReserve(command, this);
    } else { // @ts-ignore
      if (this.requestLoan.loanGuarantees.every((x: any) => x.socialLoanState == 190203)) {
        const command: CancelReserveInput = {
          loanNumber: loanNumber
        };
        this.socialLoanService.cancelReserve(command, this);
      }
    }
  }

  onSuccessCancelReserve(data: any) {
    this.customErrorHandler.showError('درخواست حذف شد');
    this.router.navigate(['/main/loan']).then();
  }

  onSuccessConfirmReserve(data: any) {
    this.customErrorHandler.showError('درخواست تایید شد');
    this.router.navigate(['/main/loan']).then();
  }

}
