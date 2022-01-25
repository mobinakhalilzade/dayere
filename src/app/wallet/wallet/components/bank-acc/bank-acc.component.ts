import {Component, OnInit} from '@angular/core';
import {BankAccountServices, IBankAccount} from '../../../../services/bankAccount.service';
import {HttpClient} from '@angular/common/http';
import {BankAccountDto, DeleteBankAccountInput, SetDefaultBankAccountInput} from '../../../../interfaces/bankAccount.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-bank-acc',
  templateUrl: './bank-acc.component.html',
  styleUrls: ['./bank-acc.component.css']
})
export class BankAccComponent implements OnInit, IBankAccount {
  bankAccounts:  BankAccountDto[] = [];
  id: any;

  constructor(
    private http: HttpClient,
    private bankAccountServices: BankAccountServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.bankAccountServices = new BankAccountServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    //get all bank accounts and show with carousel
    this.bankAccountServices.getAll(this);
    $('.carousel').carousel({
      interval: false,
    });
  }

  //show all bank accounts
  onSuccessGetAll(data: BankAccountDto[]) {
    this.bankAccounts = data;
  }

  //delete bank account with id
  delete(id: number) {
    for (let item of this.bankAccounts) {
      if (item.bankAccountId == id) {
        if (item.isDefault) {
          this.customErrorHandler.showError('حساب پیشفرض را نمیتوانید پاک کنید');
          return;
        } else {
          $('#bankAccDelete').modal('show');
          this.id = id;
        }
      }
    }
  }


  confirmDelete() {
    const command: DeleteBankAccountInput ={
      bankAccountId : this.id
    }
    this.bankAccountServices.delete(command, this);
    $('#bankAccDelete').modal('hide');
    this.bankAccountServices.getAll(this);
  }

  cancel() {
    $('#bankAccDelete').modal('hide');
  }

  //set default bank account with id
  setDefault(id: number) {
    const command: SetDefaultBankAccountInput={
      bankAccountId : id
    }
    this.bankAccountServices.setDefault(command, this);
  }

  //get all bank account to show changes
  onSuccessDelete(data: any) {
    $('#exampleModal').modal('hide');
    this.bankAccountServices.getAll(this);
    this.customErrorHandler.showError('حذف با موفقیت انجام شد');
  }

  //get all bank account to show changes
  onSuccessSetDefault(data: any) {
    this.customErrorHandler.showError('حساب مورد نظر پیشفرض شد');
    this.bankAccountServices.getAll(this);
  }

}
