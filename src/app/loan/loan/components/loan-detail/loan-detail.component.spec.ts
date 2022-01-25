import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailComponent } from './loan-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {ProfileServices} from '../../../../services/profile.service';
import {LoanServices} from '../../../../services/loan.service';

describe('LoanDetailComponent', () => {
  let component: LoanDetailComponent;
  let fixture: ComponentFixture<LoanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[ProfileServices,LoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
