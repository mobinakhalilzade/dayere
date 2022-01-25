import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoanApplicationDetailComponent} from './loan-application-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocialLoanServices} from '../../../../services/socialLoan.service';
import {Overlay} from '@angular/cdk/overlay';

describe('LoanApplicationDetailComponent', () => {
  let component: LoanApplicationDetailComponent;
  let fixture: ComponentFixture<LoanApplicationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanApplicationDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CustomErrorHandlerService, MatSnackBar,SocialLoanServices,Overlay,LoanApplicationDetailComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getAllFree method', () => {
    const component = TestBed.inject(LoanApplicationDetailComponent);
    expect(component.onSuccessGetAllRequest).toBeDefined();
  });

});

class MockSocialLoanServices {
  fundId = {fundId: 1};
}
