import {Component, OnInit} from '@angular/core';
import {IProfile, ProfileServices} from '../../../../services/profile.service';
import {HttpClient} from '@angular/common/http';
import {ProfileDto} from '../../../../interfaces/profile.interface';
import {IGetBalance, WalletServices} from '../../../../services/wallet.service';
import {GetBalanceDto} from '../../../../interfaces/wallet.interface';
import {Router} from '@angular/router';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, IProfile, IGetBalance {

  profileInfo: ProfileDto | undefined;
  walletBalance: GetBalanceDto | undefined;
  hasAvatar: boolean = false;
  loading: boolean = true;

  notifications:any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private profileServices: ProfileServices,
    private walletServices: WalletServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.profileServices = new ProfileServices(this.http,this.customErrorHandler);
    this.walletServices = new WalletServices(this.http,this.customErrorHandler);
  }

  ngOnInit(): void {
    //get profile and wallet balance information
    this.profileServices.getProfile(this);
    this.profileServices.getBalance(this);
  }

  /***
   *
   * @param data:profileInfo object that contains :phoneNumber,name,lastName,imageUrl,id
   */
  onSuccessProfile(data: ProfileDto) {
    this.loading = false;
    this.profileInfo = data;
  }

  /***
   *
   * @param wallet:walletBalance object that contains  :withdrawAmount,balanceAmount,blockedAmount
   */
  onSuccessGetBalance(wallet: GetBalanceDto) {
    this.walletBalance = wallet;
  }

  //navigate to deposit page
  deposit() {
    this.router.navigate(['/wallet/deposit']).then();
  }

  //navigate to withdraw page
  withdraw() {
    this.router.navigate(['/wallet/withdraw']).then();
  }



}
