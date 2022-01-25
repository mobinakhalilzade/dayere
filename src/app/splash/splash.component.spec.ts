import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashComponent } from './splash.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoanServices} from '../services/loan.service';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {SplashService} from '../helper/splash.service';
import {ProfileServices} from '../services/profile.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[SplashService,ProfileServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
