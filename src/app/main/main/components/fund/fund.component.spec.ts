import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundComponent } from './fund.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FundServices} from '../../../../services/fund.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {SocialFundServices} from '../../../../services/socialFund.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('FundComponent', () => {
  let component: FundComponent;
  let fixture: ComponentFixture<FundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[FundServices,CustomErrorHandlerService,SocialFundServices,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
