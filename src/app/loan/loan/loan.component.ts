import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from '../../helper/routerData.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  routeName: any;
  hasFilter: boolean = false;
  showFilter: boolean = false;

  constructor(
    private router: Router,
    private data: RouterDataService,
  ) {
  }

  ngOnInit(): void {
    this.routeName = this.data.routeName;
    this.hasFilter = !!this.data.hasFilter;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeName = this.data.routeName;
        this.hasFilter = !!this.data.hasFilter;
      }
    });
  }

  clickOutside() {
    this.showFilter = false;
  }

}
