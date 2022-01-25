import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthenticationComponent} from './authentication.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {AuthenticationUserServices} from '../../../services/authenticationUser.service';
import {DataNormalizer} from '../../../shared/normalizers/data.normalize';
import {DataValidator} from '../../../shared/validators/data.validator';
import {ReactiveFormsModule} from '@angular/forms';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [HttpClientTestingModule, RouterTestingModule,ReactiveFormsModule ],
      providers: [AuthenticationUserServices, DataNormalizer, DataValidator, CustomErrorHandlerService, MatSnackBar, Overlay]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
