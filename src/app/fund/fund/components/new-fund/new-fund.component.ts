import {Component, OnInit} from '@angular/core';
import * as data from '../../../../../assets/data.json';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-new-fund',
  templateUrl: './new-fund.component.html',
  styleUrls: ['./new-fund.component.css']
})
export class NewFundComponent implements OnInit {
  //formGroup
  newFundTypeForm: any;
  // funds is a array in data.json (assets) to show funds type with titles and description
  funds: any;
  fundPriority: any;

  fundTypeId!: number;
  fundPriorityId!: number;

  showSocialFundPriority: boolean = false;

  // make sure that fund and priority type selected
  selectedFund: boolean = false;
  selectedPriority: boolean = false;

  constructor(
    private customErrorHandler: CustomErrorHandlerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.funds = data['funds'];
    this.fundPriority = data['fundPriority'];
    this.newFundTypeForm = new FormGroup({
      acceptTerms: new FormControl(false, Validators.requiredTrue)
    });
  }

  chooseFundType(id: number) {
    for (let item of this.funds) {
      if (item.id == id) {
        this.fundTypeId = id;
        this.selectedFund = true;
      }
    }
    switch (id) {
      case 1 :
        this.showSocialFundPriority = false;
        this.fundPriorityId = 3;
        return;
      case 2 :
        this.showSocialFundPriority = true;
        return;
    }
  }

  isLottery(id: number) {
    for (let item of this.fundPriority) {
      if (item.id == id) {
        this.fundPriorityId = id;
        this.selectedPriority = true;
      }
    }
  }

  chooseFund(form: FormGroup) {
    if (this.fundTypeId == 0) {
      this.customErrorHandler.showError(' به زودی ...');
      return;
    } else if (!this.selectedFund) {
      this.customErrorHandler.showError('لطفا نوع صندوق را انتخاب کنید');
      return;
    } else if (this.fundTypeId == 2 && !this.selectedPriority) {
      this.customErrorHandler.showError('لطفا روش الویت دهی صندوق را انتخاب کنید');
      return;
    } else if (this.fundPriorityId == 1) {
      this.customErrorHandler.showError('چیدمان دستی به زودی ...');
      return;
    } else if (!form.value.acceptTerms) {
      this.customErrorHandler.showError('لطفا قوانین و شرایط مدیریت دایره را بپذیرید');
      return;
    } else if (this.fundTypeId == 1 && form.value.acceptTerms) {
      this.router.navigate(['/fund/new-organization-fund']).then();
      return;
    } else if (this.fundTypeId == 2 && form.value.acceptTerms) {
      this.router.navigate(['/fund/new-social-fund']).then();
      return;
    }
  }
}
