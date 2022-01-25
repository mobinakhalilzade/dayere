import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComponent } from './loan.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialFundServices} from '../../../../services/socialFund.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {LoanServices} from '../../../../services/loan.service';
import {DataSharingService} from '../../../../helper/dataSharing.service';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[LoanServices,DataSharingService,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
