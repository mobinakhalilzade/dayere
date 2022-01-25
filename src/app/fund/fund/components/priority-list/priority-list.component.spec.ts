import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityListComponent } from './priority-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {LoanServices} from '../../../../services/loan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {SocialFundServices} from '../../../../services/socialFund.service';

describe('PriorityListComponent', () => {
  let component: PriorityListComponent;
  let fixture: ComponentFixture<PriorityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[SocialFundServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
