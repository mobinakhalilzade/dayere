import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawComponent } from './withdraw.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WalletServices} from '../../../../services/wallet.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {ProfileServices} from '../../../../services/profile.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AmountSeparatorPipe} from '../../../../shared/pipes/amountSeparator/amount-separator.pipe';
import {AmountPipe} from '../../../../shared/pipes/amount/amount.pipe';

describe('WithdrawComponent', () => {
  let component: WithdrawComponent;
  let fixture: ComponentFixture<WithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawComponent ,AmountSeparatorPipe,AmountPipe],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[WalletServices,ProfileServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
