import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccComponent } from './bank-acc.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AccountService} from '../../../../services/account.service';
import {ProfileServices} from '../../../../services/profile.service';
import {DataValidator} from '../../../../shared/validators/data.validator';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {BankAccountServices} from '../../../../services/bankAccount.service';

describe('BankAccComponent', () => {
  let component: BankAccComponent;
  let fixture: ComponentFixture<BankAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccComponent ],
      imports:[HttpClientTestingModule],
      providers:[BankAccountServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
