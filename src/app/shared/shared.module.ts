import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//components
import {CustomTextBoxComponent} from './components/custom-text-box/custom-text-box.component';
import {HeaderComponent} from './components/header/header.component';
import {IconbarComponent} from './components/iconbar/iconbar.component';
import {LoadingComponent} from '../loading/loading.component';

//directives
import {CountdownDirective} from './directives/countdown/countdown.directive';
//tools
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

//pipes
import {AmountPipe} from './pipes/amount/amount.pipe';
import {A11yModule} from '@angular/cdk/a11y';
import {AmountSeparatorPipe} from './pipes/amountSeparator/amount-separator.pipe';
import { VoteResultPipe } from './pipes/voteResult/vote-result.pipe';
import { PercentPipe } from './pipes/percent/percent.pipe';
import { MonthPipe } from './pipes/month/month.pipe';
import { DayPipe } from './pipes/day/day.pipe';
import { SecToDayPipe } from './pipes/secToDay/sec-to-day.pipe';
import { SocialFundPriorityPipe } from './pipes/socialFundPriority/social-fund-priority.pipe';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ClickOutsideDirective } from './directives/clickOutside/click-outside.directive';
import { SocialLoanStatePipe } from './pipes/socialLoanStates/social-loan-state.pipe';
import { PersianNumberPipe } from './pipes/number/number.pipe';
import { InstallmentStatePipe } from './pipes/installmentState/installment-state.pipe';
import {NgxMaskModule} from 'ngx-mask';
import { FundPictureComponent } from './components/fund-picture/fund-picture.component';

@NgModule({
  declarations: [
    CustomTextBoxComponent,
    CountdownDirective,
    HeaderComponent,
    IconbarComponent,
    AmountPipe,
    LoadingComponent,
    AmountSeparatorPipe,
    VoteResultPipe,
    PercentPipe,
    MonthPipe,
    DayPipe,
    SecToDayPipe,
    SocialFundPriorityPipe,
    BackButtonComponent,
    ClickOutsideDirective,
    SocialLoanStatePipe,
    PersianNumberPipe,
    InstallmentStatePipe,
    FundPictureComponent,
  ],

  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    A11yModule,
    NgxMaskModule.forRoot({
      showMaskTyped: true,
    }),
  ],
  exports: [
    CustomTextBoxComponent,
    CountdownDirective,
    HeaderComponent,
    IconbarComponent,
    AmountPipe,
    VoteResultPipe,
    LoadingComponent,
    AmountSeparatorPipe,
    PercentPipe,
    MonthPipe,
    DayPipe,
    SecToDayPipe,
    SocialFundPriorityPipe,
    BackButtonComponent,
    ClickOutsideDirective,
    SocialLoanStatePipe,
    PersianNumberPipe,
    InstallmentStatePipe,
    NgxMaskModule,
    MatFormFieldModule,
    MatInputModule,
    FundPictureComponent
  ]
})
export class SharedModule {
}
