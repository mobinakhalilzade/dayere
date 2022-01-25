import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewSocialFundComponent} from './fund/components/new-fund/components/new-social-fund/new-social-fund.component';
//routing
import {FundRoutingModule} from './fund-routing.module';
//components
import {VotingComponent} from './fund/components/voting/voting.component';
import {FundComponent} from './fund/fund.component';
import {TermsComponent} from './fund/components/terms/terms.component';
import {VotersListComponent} from './fund/components/voters-list/voters-list.component';
import {MembersVoteListComponent} from './fund/components/members-vote-list/members-vote-list.component';
import {NewFundVotingComponent} from './fund/components/new-fund-voting/new-fund-voting.component';
import {NewMemberVotingComponent} from './fund/components/new-member-voting/new-member-voting.component';
import {FundDetailComponent} from './fund/components/fund-detail/fund-detail.component';
import {GuaranteesDetailComponent} from './fund/components/guarantees-detail/guarantees-detail.component';
import {LoansManagementComponent} from './fund/components/loans-management/loans-management.component';
import {LoanApplicationDetailComponent} from './fund/components/loan-application-detail/loan-application-detail.component';
import {OngoingLoanDetailComponent} from './fund/components/ongoing-loan-detail/ongoing-loan-detail.component';
import {FundAccountComponent} from './fund/components/fund-account/fund-account.component';
import {PriorityListComponent} from './fund/components/priority-list/priority-list.component';
import {EditFundComponent} from './fund/components/edit-fund/edit-fund.component';
import {ExitRequestsComponent} from './fund/components/exit-requests/exit-requests.component';
import {ExitRequestDetailComponent} from './fund/components/exit-request-detail/exit-request-detail.component';
//services
import {BankAccountServices} from '../services/bankAccount.service';
import {SocialFundServices} from '../services/socialFund.service';
import {ProfileServices} from '../services/profile.service';
import {FundServices} from '../services/fund.service';
import {RouterDataService} from '../helper/routerData.service';
import {SocialLoanServices} from '../services/socialLoan.service';

//tools
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {A11yModule} from '@angular/cdk/a11y';
import {ChartsModule} from 'ng2-charts';
import {GeneralService} from '../services/general.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';
import { NewOrganizationFundComponent } from './fund/components/new-fund/components/new-organization-fund/new-organization-fund.component';
import { NewFundComponent } from './fund/components/new-fund/new-fund.component';

@NgModule({
  declarations: [
    VotingComponent,
    FundComponent,
    NewFundVotingComponent,
    NewMemberVotingComponent,
    TermsComponent,
    VotersListComponent,
    MembersVoteListComponent,
    FundDetailComponent,
    GuaranteesDetailComponent,
    LoansManagementComponent,
    LoanApplicationDetailComponent,
    OngoingLoanDetailComponent,
    FundAccountComponent,
    PriorityListComponent,
    EditFundComponent,
    ExitRequestsComponent,
    ExitRequestDetailComponent,
    NewOrganizationFundComponent,
    NewSocialFundComponent,
    NewFundComponent
  ],
  imports: [
    CommonModule,
    FundRoutingModule,
    SharedModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    A11yModule,
    MatSelectModule,
    ChartsModule
  ],
  providers: [
    BankAccountServices,
    SocialFundServices,
    ProfileServices,
    FundServices,
    RouterDataService,
    CustomErrorHandlerService,
    SocialLoanServices,
    GeneralService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FundModule {
}
