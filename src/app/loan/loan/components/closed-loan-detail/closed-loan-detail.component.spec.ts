import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedLoanDetailComponent } from './closed-loan-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {LoanServices} from '../../../../services/loan.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ClosedLoanDetailComponent', () => {
  let component: ClosedLoanDetailComponent;
  let fixture: ComponentFixture<ClosedLoanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedLoanDetailComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[LoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedLoanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
