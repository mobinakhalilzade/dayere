import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEstimationComponent } from './loan-estimation.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FundServices} from '../../../../services/fund.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {SocialFundServices} from '../../../../services/socialFund.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {AmountSeparatorPipe} from '../../../../shared/pipes/amountSeparator/amount-separator.pipe';

describe('LoanEstimationComponent', () => {
  let component: LoanEstimationComponent;
  let fixture: ComponentFixture<LoanEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEstimationComponent ,AmountSeparatorPipe],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
