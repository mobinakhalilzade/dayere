import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//main Module
import {MainRoutingModule} from './main-routing.module';
//components
import {MainComponent} from './main/main.component';
import {BlogComponent} from './main/components/blog/blog.component';
import {LoanComponent} from './main/components/loan/loan.component';
import {FundComponent} from './main/components/fund/fund.component';
import {TransactionComponent} from './main/components/transaction/transaction.component';
import {ProfileComponent} from './main/components/profile/profile.component';
//tolls
import {MatTabsModule} from '@angular/material/tabs';
import {SharedModule} from '../shared/shared.module';
import {ProfileServices} from '../services/profile.service';
import {WalletServices} from '../services/wallet.service';
import {A11yModule} from '@angular/cdk/a11y';
import {FundServices} from '../services/fund.service';
import {TransactionsServices} from '../services/transaction.service';
import {LoanServices} from '../services/loan.service';
import {SocialFundServices} from '../services/socialFund.service';
import {GeneralService} from '../services/general.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';

@NgModule({
  declarations: [
    MainComponent,
    LoanComponent,
    ProfileComponent,
    BlogComponent,
    FundComponent,
    TransactionComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTabsModule,
    SharedModule,
    A11yModule
  ],
  providers: [
    ProfileServices,
    WalletServices,
    FundServices,
    CustomErrorHandlerService,
    GeneralService,
    TransactionsServices,
    LoanServices,
    SocialFundServices
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}
