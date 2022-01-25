import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositComponent } from './deposit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoanServices} from '../../../../services/loan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {WalletServices} from '../../../../services/wallet.service';
import {AmountPipe} from '../../../../shared/pipes/amount/amount.pipe';
import {AmountSeparatorPipe} from '../../../../shared/pipes/amountSeparator/amount-separator.pipe';

describe('DepositComponent', () => {
  let component: DepositComponent;
  let fixture: ComponentFixture<DepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositComponent,AmountPipe,AmountSeparatorPipe ],
      imports:[HttpClientTestingModule],
      providers:[WalletServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
