import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BlogComponent } from './main/components/blog/blog.component';
import { FundComponent } from './main/components/fund/fund.component';
import { LoanComponent } from './main/components/loan/loan.component';
import { ProfileComponent } from './main/components/profile/profile.component';
import { TransactionComponent } from './main/components/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'fund', component: FundComponent },
      { path: 'loan', component: LoanComponent },
      { path: 'blog', component: BlogComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
