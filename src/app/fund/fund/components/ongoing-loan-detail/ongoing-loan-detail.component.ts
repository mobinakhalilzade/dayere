import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {IGetAll, SocialLoanServices} from '../../../../services/socialLoan.service';
import {GetAllSocialLoanDto, GetAllInput} from '../../../../interfaces/socialLoan.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-ongoing-loan-detail',
  templateUrl: './ongoing-loan-detail.component.html',
  styleUrls: ['./ongoing-loan-detail.component.css']
})
export class OngoingLoanDetailComponent implements OnInit, IGetAll {

  ongoingLoans: GetAllSocialLoanDto | undefined;
  loanId: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private socialLoanService: SocialLoanServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.socialLoanService = new SocialLoanServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('fundId');
    this.loanId = this.route.snapshot.paramMap.get('loanId');

    const command: GetAllInput = {
      fundId: Number(id)
    };
    this.socialLoanService.getAll(command, this);
  }

  onSuccessGetAll(data: GetAllSocialLoanDto[]) {
    this.ongoingLoans = data.find(x => x.loanId == this.loanId);
  }

}
