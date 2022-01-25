import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFundComponent } from './new-fund.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('NewFundComponent', () => {
  let component: NewFundComponent;
  let fixture: ComponentFixture<NewFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFundComponent ],
      imports:[ RouterTestingModule],
      providers:[CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
