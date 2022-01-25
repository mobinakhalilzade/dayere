import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrganizationFundComponent } from './new-organization-fund.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TransactionsServices} from '../../../../../../services/transaction.service';
import {DataNormalizer} from '../../../../../../shared/normalizers/data.normalize';
import {DataSharingService} from '../../../../../../helper/dataSharing.service';
import {CustomErrorHandlerService} from '../../../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {AmountSeparatorPipe} from '../../../../../../shared/pipes/amountSeparator/amount-separator.pipe';
import {PercentPipe} from '../../../../../../shared/pipes/percent/percent.pipe';
import {MonthPipe} from '../../../../../../shared/pipes/month/month.pipe';

describe('NewOrganizationFundComponent', () => {
  let component: NewOrganizationFundComponent;
  let fixture: ComponentFixture<NewOrganizationFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrganizationFundComponent ,AmountSeparatorPipe,PercentPipe,MonthPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrganizationFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
