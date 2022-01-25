import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from '../../helper/routerData.service';
import {DataSharingService} from '../../helper/dataSharing.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  routeName: any;
  hasFilter: boolean = false;
  showFilter: boolean = false;
  fundId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private data: RouterDataService,
    private dataSharing: DataSharingService,
  ) {
  }

  ngOnInit(): void {
    // show filter svg and route names with data in module routing
    this.routeName = this.data.routeName;
    this.hasFilter = !!this.data.hasFilter;
    this.dataSharing.fundId.subscribe((response: any) => {
      this.fundId = response;
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeName = this.data.routeName;
        this.hasFilter = !!this.data.hasFilter;
      }
      this.showFilter = false;
    });



  }
//close filter
  clickOutside() {
    this.showFilter = false;
  }
}
