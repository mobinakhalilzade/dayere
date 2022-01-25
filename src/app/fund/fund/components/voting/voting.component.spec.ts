import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingComponent } from './voting.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BankAccountServices} from '../../../../services/bankAccount.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {FundServices} from '../../../../services/fund.service';

describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingComponent ],
      imports:[HttpClientTestingModule],
      providers:[FundServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
