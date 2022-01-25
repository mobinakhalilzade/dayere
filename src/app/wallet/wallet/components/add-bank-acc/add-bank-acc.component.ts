import {Component, OnInit} from '@angular/core';
import {BankAccountServices, IAddBankAccount} from '../../../../services/bankAccount.service';
import {AddBankAccountInput} from '../../../../interfaces/bankAccount.interface';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-add-bank-acc',
  templateUrl: './add-bank-acc.component.html',
  styleUrls: ['./add-bank-acc.component.css']
})
export class AddBankAccComponent implements OnInit, IAddBankAccount {
  addAccountForm: any;
  isCard: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private bankAccountServices: BankAccountServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.bankAccountServices = new BankAccountServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    this.addAccountForm = new FormGroup({
      number: new FormControl('', [Validators.required])
    });
  }

  //send data to add a new bank account
  add(form: any) {
    if (form.value.number == '' && this.isCard) {
      this.customErrorHandler.showError('لطفا شماره کارت را وارد نمایید');
      return;
    } else if (form.value.number == '' && !this.isCard) {
      this.customErrorHandler.showError('لطفا شماره شبا را وارد نمایید');
      return;
    }
    const command: AddBankAccountInput = {
      isCard: this.isCard,
      number: form.value.number
    };
    this.bankAccountServices.add(command, this);
  }

  onSuccessAdd(data: any) {
    this.router.navigate(['/wallet/bankAccounts']).then();
  }

}
