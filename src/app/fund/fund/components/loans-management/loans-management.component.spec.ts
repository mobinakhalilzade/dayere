import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansManagementComponent } from './loans-management.component';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('LoansManagementComponent', () => {
  let component: LoansManagementComponent;
  let fixture: ComponentFixture<LoansManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansManagementComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[SocialLoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
