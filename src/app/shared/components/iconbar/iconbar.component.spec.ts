import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconbarComponent } from './iconbar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FundServices} from '../../../services/fund.service';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';
import {SocialFundServices} from '../../../services/socialFund.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('IconbarComponent', () => {
  let component: IconbarComponent;
  let fixture: ComponentFixture<IconbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconbarComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[FundServices,CustomErrorHandlerService,SocialFundServices,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
