import {Component, OnInit} from '@angular/core';
import {FundServices, IFreeFund} from '../../../../services/fund.service';
import {HttpClient} from '@angular/common/http';
import {FreeFundDto} from '../../../../interfaces/fund.interface';
import {NavigationExtras, Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit, IFreeFund {

  freeFunds: FreeFundDto[] = [];
  fundId: any = [];

  constructor(
    private fundServices: FundServices,
    private router: Router,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient
  ) {
    this.fundServices = new FundServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    this.fundServices.getAllFree(this);
  }

  onSuccessGetAllFree(data: FreeFundDto[]) {
    this.freeFunds = data;
  }


  selectedFunds(event: any, id: number) {
    if (event.checked) {
      this.fundId.push(id);
    } else {
      let index = this.fundId.indexOf(id);
      if (index > -1) {
        this.fundId.splice(index, 1);
      }
    }
  }

  loanCalculate() {
    if (this.fundId.length == 0) {
      this.customErrorHandler.showError('حداقل یک دایره را باید انتخاب کنید');
      return;
    }
    const queryParams: any = {};
    queryParams.fundsId = JSON.stringify(this.fundId);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/loan/suggested-loan'], navigationExtras).then();
  }
}
