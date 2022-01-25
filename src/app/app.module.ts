import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SplashComponent} from './splash/splash.component';
import {SplashService} from './helper/splash.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LoadingService} from './helper/loading.service';
import {SharedModule} from './shared/shared.module';
import {ModalService} from './helper/modal.service';
import {ChartsModule} from 'ng2-charts';
import {GlobalErrorHandlerService} from './services/global-error-handler.service';
import {ProfileServices} from './services/profile.service';
import {CustomErrorHandlerService} from './services/custom-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MatSnackBarModule,
    ChartsModule
  ],

  providers: [
    SplashService,
    LoadingService,
    ModalService,
    CustomErrorHandlerService,
    ProfileServices,
    {provide: LOCALE_ID, useValue: 'fa-IR'},
    {
      provide: HTTP_INTERCEPTORS, useClass: GlobalErrorHandlerService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
