import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BankAccountServices} from '../../../services/bankAccount.service';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {AccountService} from '../../../services/account.service';
import {ProfileServices} from '../../../services/profile.service';
import {DataValidator} from '../../../shared/validators/data.validator';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AccountService,ProfileServices,DataValidator,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {

    const compiled = fixture.debugElement.nativeElement;
    const phone = compiled.querySelector('custom-text-box[id="phone"]');

    expect(phone).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
