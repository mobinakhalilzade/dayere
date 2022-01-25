import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SplashService} from '../helper/splash.service';
import {IProfile, ProfileServices} from '../services/profile.service';
import {ProfileDto} from '../interfaces/profile.interface';
import {ErrorResponse} from '../interfaces/general.interface';
import {HttpClient} from '@angular/common/http';
import {GetBalanceDto} from '../interfaces/wallet.interface';
import {CustomErrorHandlerService} from '../services/custom-error-handler.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, IProfile {


  token = localStorage.getItem('Token');

  public opacityChange = 1;
  public splashTransition: any;
  public showSplash: boolean = true;
  readonly ANIMATION_DURATION = 1;

  constructor(
    private router: Router,
    private route:ActivatedRoute ,
    private service: SplashService,
    private profileServices: ProfileServices,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient
  ) {
    this.profileServices = new ProfileServices(this.http, this.customErrorHandler);
  }

  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1000);
  }

  ngOnInit(): void {
    this.service.subscribe((res: any) => {
      this.hideSplashAnimation();
    });
    if (this.token == null) {
      this.router.navigate(['/login']);
    } else {
      this.profileServices.getProfile(this);
    }
  }

  onSuccessProfile(data: ProfileDto) {
    if (data.customerId == 0) {
      this.router.navigate(['/login/authentication']);
    } else {
      const intro = localStorage.getItem('intro');
      if (intro == null) {
        this.router.navigate(['/login/intro']);
      }else{
        this.router.navigate(['/main/profile']);
      }
    }
  }

  onSuccessGetBalance(data: GetBalanceDto) {

  }



}
