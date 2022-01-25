import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {SocialFundServices} from './services/socialFund.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SocialLoanServices} from './services/socialLoan.service';
import {CustomErrorHandlerService} from './services/custom-error-handler.service';
import {Overlay} from '@angular/cdk/overlay';
import {SplashService} from './helper/splash.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [SplashService, Overlay]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dayere-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dayere-web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('dayere-web app is running!');
  });
});
