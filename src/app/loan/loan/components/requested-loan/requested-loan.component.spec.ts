import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedLoanComponent } from './requested-loan.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialFundServices} from '../../../../services/socialFund.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {LoanServices} from '../../../../services/loan.service';
import {SocialLoanServices} from '../../../../services/socialLoan.service';

describe('RequestedLoansComponent', () => {
  let component: RequestedLoanComponent;
  let fixture: ComponentFixture<RequestedLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedLoanComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[SocialLoanServices,LoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
