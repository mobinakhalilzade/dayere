import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestsComponent } from './all-requests.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoanServices} from '../../../../services/loan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('AllRequestsComponent', () => {
  let component: AllRequestsComponent;
  let fixture: ComponentFixture<AllRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestsComponent ],
      imports:[HttpClientTestingModule],
      providers:[LoanServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
