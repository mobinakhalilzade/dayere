import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WalletComponent} from './wallet/wallet.component';
import {WithdrawComponent} from './wallet/components/withdraw/withdraw.component';
import {DepositComponent} from './wallet/components/deposit/deposit.component';
import {AddBankAccComponent} from './wallet/components/add-bank-acc/add-bank-acc.component';
import {BankAccComponent} from './wallet/components/bank-acc/bank-acc.component';

const routes: Routes = [
  {
    path: '', component: WalletComponent, children: [
      {path: 'withdraw', component: WithdrawComponent, data: {routeName: 'برداشت'}},
      {path: 'deposit', component: DepositComponent, data: {routeName: 'شارژ'}},
      {path: 'bankAccounts', component: BankAccComponent, data: {routeName: 'مدیریت حساب ها'}},
      {path: 'addBankAccount', component: AddBankAccComponent, data: {routeName: 'حساب جدید'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {
}
