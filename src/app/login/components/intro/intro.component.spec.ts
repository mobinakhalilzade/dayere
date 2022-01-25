import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IntroComponent} from './intro.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialFundServices} from '../../../services/socialFund.service';
import {ProfileServices} from '../../../services/profile.service';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProfileServices, CustomErrorHandlerService, MatSnackBar, Overlay]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
