import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from '../../helper/routerData.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  routeName: any;

  constructor(
    private router: Router,
    private data: RouterDataService,
  )
  {}

  ngOnInit(): void {
    this.routeName=this.data.routeName;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeName = this.data.routeName;
      }
    });
  }

}
