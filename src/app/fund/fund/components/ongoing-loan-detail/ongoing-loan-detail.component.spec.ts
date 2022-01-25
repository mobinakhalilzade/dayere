import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingLoanDetailComponent } from './ongoing-loan-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('OngoingLoanDetailComponent', () => {
  let component: OngoingLoanDetailComponent;
  let fixture: ComponentFixture<OngoingLoanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingLoanDetailComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[SocialLoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingLoanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
