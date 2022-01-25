import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFundVotingComponent } from './new-fund-voting.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LoanServices} from '../../../../services/loan.service';
import {DataSharingService} from '../../../../helper/dataSharing.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {SocialFundServices} from '../../../../services/socialFund.service';
import {ProfileServices} from '../../../../services/profile.service';

describe('FundVotingComponent', () => {
  let component: NewFundVotingComponent;
  let fixture: ComponentFixture<NewFundVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFundVotingComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[SocialFundServices,ProfileServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFundVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
