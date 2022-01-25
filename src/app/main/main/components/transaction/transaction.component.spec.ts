import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ProfileServices} from '../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {TransactionsServices} from '../../../../services/transaction.service';
import {DataNormalizer} from '../../../../shared/normalizers/data.normalize';
import {DataSharingService} from '../../../../helper/dataSharing.service';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [HttpClientTestingModule],
      providers: [TransactionsServices,DataNormalizer,DataSharingService, CustomErrorHandlerService, MatSnackBar, Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
