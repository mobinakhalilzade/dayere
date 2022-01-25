import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewLoanComponent} from './new-loan.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FundServices} from '../../../../services/fund.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {RouterTestingModule} from '@angular/router/testing';

describe('NewLoanComponent', () => {
  let component: NewLoanComponent;
  let fixture: ComponentFixture<NewLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewLoanComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [NewLoanComponent, CustomErrorHandlerService, MatSnackBar, Overlay, FundServices]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getAllFree method', () => {
    const service: FundServices = TestBed.get(FundServices);
    expect(service.getAllFree).toBeDefined();
  });

  it('onSuccessGetAllFree method most be defined', () => {
    component.ngOnInit();
    expect(component.onSuccessGetAllFree).toBeDefined();
  });

});
