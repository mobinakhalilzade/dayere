import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewSocialFundComponent} from './fund/components/new-fund/components/new-social-fund/new-social-fund.component';
import {VotingComponent} from './fund/components/voting/voting.component';
import {FundComponent} from './fund/fund.component';
import {TermsComponent} from './fund/components/terms/terms.component';
import {VotersListComponent} from './fund/components/voters-list/voters-list.component';
import {NewMemberVotingComponent} from './fund/components/new-member-voting/new-member-voting.component';
import {NewFundVotingComponent} from './fund/components/new-fund-voting/new-fund-voting.component';
import {MembersVoteListComponent} from './fund/components/members-vote-list/members-vote-list.component';
import {FundDetailComponent} from './fund/components/fund-detail/fund-detail.component';
import {GuaranteesDetailComponent} from './fund/components/guarantees-detail/guarantees-detail.component';
import {LoansManagementComponent} from './fund/components/loans-management/loans-management.component';
import {OngoingLoanDetailComponent} from './fund/components/ongoing-loan-detail/ongoing-loan-detail.component';
import {LoanApplicationDetailComponent} from './fund/components/loan-application-detail/loan-application-detail.component';
import {FundAccountComponent} from './fund/components/fund-account/fund-account.component';
import {PriorityListComponent} from './fund/components/priority-list/priority-list.component';
import {EditFundComponent} from './fund/components/edit-fund/edit-fund.component';
import {ExitRequestsComponent} from './fund/components/exit-requests/exit-requests.component';
import {ExitRequestDetailComponent} from './fund/components/exit-request-detail/exit-request-detail.component';
import {NewOrganizationFundComponent} from './fund/components/new-fund/components/new-organization-fund/new-organization-fund.component';
import {NewFundComponent} from './fund/components/new-fund/new-fund.component';


const routes: Routes = [
  {
    path: '', component: FundComponent, children: [
      {path: 'new-fund', component: NewFundComponent, data: {routeName: 'دایره جدید'}},
      {path: 'new-social-fund', component: NewSocialFundComponent, data: {routeName: 'دایره جدید'}},
      {path: 'new-organization-fund', component: NewOrganizationFundComponent, data: {routeName: 'دایره جدید'}},
      {path: 'voting', component: VotingComponent, data: {routeName: 'رای گیری ها'}},
      {path: 'new-member-voting', component: NewMemberVotingComponent, data: {routeName: 'رای گیری فرد جدید'}},
      {path: 'new-fund-voting/:id', component: NewFundVotingComponent, data: {routeName: 'رای گیری دایره جدید'}},
      {path: 'terms', component: TermsComponent, data: {routeName: 'قوانین و مقررات'}},
      {path: 'voters-list', component: VotersListComponent, data: {routeName: 'وام جدید'}},
      {path: 'members-vote-list/:id', component: MembersVoteListComponent, data: {routeName: 'لیست رای اعضا'}},
      {path: 'fund-detail/:id', component: FundDetailComponent, data: {routeName: 'جزییات دایره', hasFilter: true}},
      {path: 'guarantees-detail/:id', component: GuaranteesDetailComponent, data: {routeName: 'جزییات ضمانت ها'}},
      {path: 'loans-management/:id', component: LoansManagementComponent, data: {routeName: 'مدیریت وام ها'}},
      {path: 'ongoing-loan-detail/:fundId/:loanId', component: OngoingLoanDetailComponent, data: {routeName: 'جزییات وام در جریان'}},
      {path: 'loan-application-detail/:fundId/:loanId', component: LoanApplicationDetailComponent, data: {routeName: 'جزییات درخواست وام'}},
      {path: 'fund-account/:id', component: FundAccountComponent, data: {routeName: 'حساب صندوق'}},
      {path: 'priority-list/:id', component: PriorityListComponent, data: {routeName: 'لیست الویت ها'}},
      {path: 'edit-fund/:id', component: EditFundComponent, data: {routeName: 'ویرایش جزییات دایره'}},
      {path: 'exit-requests', component: ExitRequestsComponent, data: {routeName: 'درخواست های خروج'}},
      {path: 'exit-request-detail/:id', component: ExitRequestDetailComponent, data: {routeName: 'جزییات درخواست خروج'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutingModule {
}
