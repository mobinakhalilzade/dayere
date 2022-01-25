import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankAccComponent } from './add-bank-acc.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SplashService} from '../../../../helper/splash.service';
import {ProfileServices} from '../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {BankAccountServices} from '../../../../services/bankAccount.service';

describe('AddBankAccComponent', () => {
  let component: AddBankAccComponent;
  let fixture: ComponentFixture<AddBankAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankAccComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[BankAccountServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
