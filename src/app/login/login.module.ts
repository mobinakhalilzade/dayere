import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
//login module
import {LoginRoutingModule} from './login-routing.module';
//components
import {LoginComponent} from './components/login/login.component';
import {IntroComponent} from './components/intro/intro.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
//tools
import {SharedModule} from '../shared/shared.module';
import {MatNativeDateModule} from '@angular/material/core';
import {NgxMaskModule} from 'ngx-mask';
//mat
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
//services
import {AuthenticationUserServices} from '../services/authenticationUser.service';
import {AccountService} from '../services/account.service';
import {ProfileServices} from '../services/profile.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';

@NgModule({
  declarations: [
    LoginComponent,
    IntroComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot({
      showMaskTyped: true,
    }),
  ],
  providers: [
    AuthenticationUserServices,
    AccountService,
    CustomErrorHandlerService,
    ProfileServices
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {
}
