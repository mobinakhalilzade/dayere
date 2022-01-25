import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-organization-fund',
  templateUrl: './new-organization-fund.component.html',
  styleUrls: ['./new-organization-fund.component.css']
})
export class NewOrganizationFundComponent implements OnInit {

  newOrganizationFundForm: any;
  isLinear = false;
  membershipFeeList = [
    {value: 0, active: false},
    {value: 2000000, active: false},
    {value: 5000000, active: false},
  ];
  loanInterestList = [
    {value: 0, active: false},
    {value: 10, active: false},
    {value: 18, active: false},
  ];
  minLoanAmountList = [
    {value: 9, active: false},
    {value: 6, active: false},
    {value: 3, active: false},
  ];
  maxLoanAmountList = [
    {value: 9, active: false},
    {value: 6, active: false},
    {value: 3, active: false},
  ];
  minInstallmentList = [
    {value: 9, active: false},
    {value: 6, active: false},
    {value: 3, active: false},
  ];
  maxInstallmentList = [
    {value: 9, active: false},
    {value: 6, active: false},
    {value: 3, active: false},
  ];
  membershipFee: any;
  loanInterest: any;
  minLoanAmount!: number;
  maxLoanAmount!: number;
  minInstallment!: number;
  maxInstallment!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.newOrganizationFundForm = new FormGroup({
      name: new FormControl('', Validators.required),
      membershipFee: new FormControl(),
      loanInterest: new FormControl(),
      minLoanAmount: new FormControl(),
      maxLoanAmount: new FormControl(),
      maxInstallment: new FormControl(),
      minInstallment: new FormControl(),
    });
  }

  setMembershipFee(value: number) {
    this.membershipFee = value;
    for (let item of this.membershipFeeList) {
      item.active = item.value == value;
    }
  }

  setLoanInterest(value: number) {
    this.loanInterest = value;
    for (let item of this.loanInterestList) {
      item.active = item.value == value;
    }
  }

  step1(form: FormGroup, stepper: any) {
    stepper.next();
  }

  setMinLoanAmount(value: number) {
    this.minLoanAmount = value;
    for (let item of this.minLoanAmountList) {
      item.active = item.value == value;
    }
  }

  setMaxLoanAmount(value: number) {
    this.maxLoanAmount = value;
    for (let item of this.maxLoanAmountList) {
      item.active = item.value == value;
    }
  }

  setMinInstallment(value: number) {
    this.minInstallment = value;
    for (let item of this.minInstallmentList) {
      item.active = item.value == value;
    }
  }

  setMaxInstallment(value: number) {
    this.maxInstallment = value;
    for (let item of this.maxInstallmentList) {
      item.active = item.value == value;
    }
  }

  step2(form: FormGroup, stepper: any) {
console.log(form.value);
  }
}
