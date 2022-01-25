import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//routing
import {WalletRoutingModule} from './wallet-routing.module';
//components
import {WalletComponent} from './wallet/wallet.component';
import {WithdrawComponent} from './wallet/components/withdraw/withdraw.component';
import {DepositComponent} from './wallet/components/deposit/deposit.component';
import {BankAccComponent} from './wallet/components/bank-acc/bank-acc.component';
import {AddBankAccComponent} from './wallet/components/add-bank-acc/add-bank-acc.component';
import {PopupsComponent} from '../shared/components/popups/popups.component';
//services
import {BankAccountServices} from '../services/bankAccount.service';
import {RouterDataService} from '../helper/routerData.service';
import {WalletServices} from '../services/wallet.service';
//tools
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {A11yModule} from '@angular/cdk/a11y';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileServices} from '../services/profile.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';

@NgModule({
  declarations: [
    WalletComponent,
    WithdrawComponent,
    DepositComponent,
    BankAccComponent,
    AddBankAccComponent,
    PopupsComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    MatSelectModule,
    A11yModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PopupsComponent
  ],
  providers: [
    WalletServices,
    BankAccountServices,
    RouterDataService,
    CustomErrorHandlerService,
    ProfileServices
  ]
})
export class WalletModule {

}
