import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FundDetailComponent} from './fund-detail.component';
import {SocialFundServices} from '../../../../services/socialFund.service';

describe('FundComponent', () => {
  let component: FundDetailComponent;
  let fixture: ComponentFixture<FundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [SocialFundServices]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: SocialFundServices = TestBed.get(SocialFundServices);
    expect(component).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: SocialFundServices = TestBed.get(SocialFundServices);
    expect(service.getFundDetail).toBeTruthy();
    expect(service.getLendingCalendar).toBeTruthy();
  });
});


