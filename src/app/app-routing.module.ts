import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountService} from './services/account.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule), data: { bodyClass: 'light' }
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule), data: { bodyClass: 'light' }
  },
  {
    path: 'fund',
    loadChildren: () => import('./fund/fund.module').then(m => m.FundModule), data: { bodyClass: 'light' }
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule), data: { bodyClass: 'light' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AccountService]
})
export class AppRoutingModule {
}
