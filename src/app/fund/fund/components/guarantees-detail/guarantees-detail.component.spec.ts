import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteesDetailComponent } from './guarantees-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {WalletServices} from '../../../../services/wallet.service';
import {ProfileServices} from '../../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {SocialFundServices} from '../../../../services/socialFund.service';

describe('GuaranteesDetailComponent', () => {
  let component: GuaranteesDetailComponent;
  let fixture: ComponentFixture<GuaranteesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuaranteesDetailComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[SocialFundServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
