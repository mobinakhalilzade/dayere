import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//routing
import {LoanRoutingModule} from './loan-routing.module';
//components
import {LoanComponent} from './loan/loan.component';
import {NewLoanComponent} from './loan/components/new-loan/new-loan.component';
import {LoanDetailComponent} from './loan/components/loan-detail/loan-detail.component';
import {AllRequestsComponent} from './loan/components/all-requests/all-requests.component';
import {RequestedLoanComponent} from './loan/components/requested-loan/requested-loan.component';
import {LoanEstimationComponent} from './loan/components/loan-estimation/loan-estimation.component';
import {SuggestedLoanComponent} from './loan/components/suggested-loan/suggested-loan.component';
import {EditLoanComponent} from './loan/components/edit-loan/edit-loan.component';
import {LoanSuggestionsComponent} from './loan/components/loan-suggestions/loan-suggestions.component';
//services
import {RouterDataService} from '../helper/routerData.service';
//tools
import {SharedModule} from '../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {A11yModule} from '@angular/cdk/a11y';
import {LoanServices} from '../services/loan.service';
import {FundServices} from '../services/fund.service';
import {SocialLoanServices} from '../services/socialLoan.service';
import {FormsModule} from '@angular/forms';
import { ClosedLoanDetailComponent } from './loan/components/closed-loan-detail/closed-loan-detail.component';
import {ProfileServices} from '../services/profile.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';

@NgModule({
  declarations: [
    LoanComponent,
    NewLoanComponent,
    LoanDetailComponent,
    RequestedLoanComponent,
    AllRequestsComponent,
    LoanEstimationComponent,
    SuggestedLoanComponent,
    EditLoanComponent,
    LoanSuggestionsComponent,
    ClosedLoanDetailComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    SharedModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    A11yModule
  ],
  providers: [
    RouterDataService,
    LoanServices,
    FundServices,
    CustomErrorHandlerService,
    SocialLoanServices,
    ProfileServices
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoanModule {
}
