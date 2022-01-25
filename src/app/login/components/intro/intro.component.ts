import {Component, OnInit} from '@angular/core';
import * as data from '../../../../assets/data.json';
import {ProfileDto} from '../../../interfaces/profile.interface';
import {IProfile, ProfileServices} from '../../../services/profile.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GetBalanceDto} from '../../../interfaces/wallet.interface';
import {CustomErrorHandlerService} from '../../../services/custom-error-handler.service';

declare var $: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit,IProfile {
  intro: any;

  constructor(
    private profileServices: ProfileServices,
    public customErrorHandler: CustomErrorHandlerService,
    private router: Router,
    private http: HttpClient
  ) {
    this.profileServices = new ProfileServices(this.http,this.customErrorHandler);
  }

  ngOnInit() {
    //showing data with carousel
    this.intro = data['intro'];
    $('.carousel').carousel({
      interval: false,
    });
     localStorage.setItem('intro', 'seen');
  }

  isAuth(){
    this.profileServices.getProfile(this);
  }

  onSuccessProfile(data: ProfileDto) {
    if (data.customerId == 0) {
      this.router.navigate(['/login/authentication']).then();
    } else {
        this.router.navigate(['/main/profile']).then();
      }
    }

  onSuccessGetBalance(data: GetBalanceDto) {
  }


}
