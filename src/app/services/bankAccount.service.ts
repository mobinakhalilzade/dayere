import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {AddBankAccountInput, BankAccountDto, DeleteBankAccountInput, SetDefaultBankAccountInput} from '../interfaces/bankAccount.interface';
import {Router} from '@angular/router';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IBankAccount {
  onSuccessGetAll(data: BankAccountDto[]): void;

  onSuccessDelete(data: any): void;

  onSuccessSetDefault(data: any): void;

}

export interface IGetAllBankAccount {
  onSuccessGetAll(data: BankAccountDto[]): void;

}

export interface IGetAllFreeBankAccount {
  onSuccessGetAllFree(data: BankAccountDto[]): void;

}


export interface IAddBankAccount {
  onSuccessAdd(data: any): void;

}

@Injectable()

export class BankAccountServices extends GeneralService {

  constructor(
    public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    super(http);
  }

  getAll(action: IGetAllBankAccount) {
    this.get(this.url.services.BankAccount.GetAll).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAll(body.result);
        }
      }
    });
  }

  getAllFree(action: IGetAllFreeBankAccount) {
    this.get(this.url.services.BankAccount.GetAllFree).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessGetAllFree(body.result);
        }
      }
    });
  }

  add(input: AddBankAccountInput, action: IAddBankAccount) {
    this.post(this.url.services.BankAccount.Add, input).subscribe((response: any) => {
        if (response.status == 200) {
          const body = response.body as DataResponse<any>;
          if (body.success) {
            action.onSuccessAdd(body.result);
          }
        }
      }
    );
  }

  delete(input: DeleteBankAccountInput, action: IBankAccount) {
    this.post(this.url.services.BankAccount.Delete, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessDelete(body.result);
        }
      }
    });
  }

  setDefault(input: SetDefaultBankAccountInput, action: IBankAccount) {
    this.post(this.url.services.BankAccount.SetDefault, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessSetDefault(body.result);
        }
      }
    });
  }
}
