import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICalculate, IReserve, SocialLoanServices} from '../../../../services/socialLoan.service';
import {CalculateDto, CalculateInput, ReserveInput} from '../../../../interfaces/socialLoan.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-suggested-loan',
  templateUrl: './suggested-loan.component.html',
  styleUrls: ['./suggested-loan.component.css']
})
export class SuggestedLoanComponent implements OnInit, ICalculate, IReserve {

  fundId: any = [];
  calculatedLoan!: CalculateDto;

  constructor(
    private socialLoanServices: SocialLoanServices,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient
  ) {
    this.socialLoanServices = new SocialLoanServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    const fundsId = this.activatedRoute.snapshot.queryParamMap.get('fundsId');
    if (fundsId === null) {
      this.fundId = new Array<number>();
    } else {
      this.fundId = JSON.parse(fundsId);
    }

    const command: CalculateInput = {
      loanAmount: 0,
      installmentsCount: 0,
      fundsId: [this.fundId],
      shamsiYear: 0,
      shamsiMonth: 0
    };
    this.socialLoanServices.calculate(command, this);
  }

  onSuccessCalculate(data: CalculateDto) {
    this.calculatedLoan = data;
  }

  reserve() {
    let data = this.calculatedLoan;
    const command: ReserveInput = {
      loanAmount: data.loanAmount,
      installmentsCount: data.installmentsCount,
      fundsId: [this.fundId],
      shamsiYear: data.shamsiYear,
      shamsiMonth: data.shamsiMonth
    };
    this.socialLoanServices.reserve(command, this);
  }

  onSuccessReserve(data: any) {
    this.router.navigate(['/main/loan']).then();
  }

}
