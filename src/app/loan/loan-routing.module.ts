import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewLoanComponent} from './loan/components/new-loan/new-loan.component';
import {LoanDetailComponent} from './loan/components/loan-detail/loan-detail.component';
import {RequestedLoanComponent} from './loan/components/requested-loan/requested-loan.component';
import {LoanComponent} from './loan/loan.component';
import {AllRequestsComponent} from './loan/components/all-requests/all-requests.component';
import {LoanEstimationComponent} from './loan/components/loan-estimation/loan-estimation.component';
import {SuggestedLoanComponent} from './loan/components/suggested-loan/suggested-loan.component';
import {LoanSuggestionsComponent} from './loan/components/loan-suggestions/loan-suggestions.component';
import {EditLoanComponent} from './loan/components/edit-loan/edit-loan.component';
import {ClosedLoanDetailComponent} from './loan/components/closed-loan-detail/closed-loan-detail.component';

const routes: Routes = [
  {
    path: '', component: LoanComponent, children: [
      {path: 'new-loan', component: NewLoanComponent, data: {routeName: 'وام جدید'}},
      {path: 'loan-detail/:id', component: LoanDetailComponent, data: {routeName: 'وام در جریان'}},
      {path: 'closed-loan-detail/:id', component: ClosedLoanDetailComponent, data: {routeName: 'وام اتمام یافته'}},
      {path: 'all-requests', component: AllRequestsComponent, data: {routeName: 'درخواست های من'}},
      {path: 'requested-loans/:id', component: RequestedLoanComponent, data: {routeName: 'وام های درخواستی',hasFilter:true}},
      {path: 'loan-estimation', component: LoanEstimationComponent, data: {routeName: 'تخمین وام'}},
      {path: 'loan-suggestions', component: LoanSuggestionsComponent, data: {routeName: 'پیشنهادات وام'}},
      {path: 'edit-loan', component: EditLoanComponent, data: {routeName: 'ویرایش وام'}},
      {path: 'suggested-loan', component: SuggestedLoanComponent, data: {routeName: 'وام پیشنهادی'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule {
}
