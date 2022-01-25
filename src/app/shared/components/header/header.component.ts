import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatRadioChange} from '@angular/material/radio';
import {DataSharingService} from '../../../helper/dataSharing.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DataNormalizer} from '../../normalizers/data.normalize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//routes have filter?
  routeHasFilter: boolean = false;
  showFilter: boolean = false;
  profile: boolean = false;
  id: number = 0;
//transaction
  transactionFiltersForm: any;
  loanFilterForm: any;
  transactionType = {
    deposit: false, withdraw: false, all: false
  };
  type: number = 0;
  checked: boolean = false;

  filter = [
    {id: 1, url: '/main/profile', hasFilter: false, hasAction: true},
    {id: 2, url: '/main/transaction', hasFilter: true, hasAction: false},
    {id: 3, url: '/main/fund', hasFilter: false, hasAction: false},
    {id: 4, url: '/main/loan', hasFilter: true, hasAction: false},
    {id: 5, url: '/main/blog', hasFilter: false, hasAction: false},
  ];
//loan filters
  loan = [
    {value: 190101, title: 'وام های در جریان', checked: false},
    {value: 190102, title: 'وام های پیشین', checked: false},
    {value: 0, title: 'همه وام ها', checked: false},
  ];

  input: any;

  constructor(
    private router: Router,
    private shareData: DataSharingService,
  ) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        for (let item of this.filter) {
          if (event.url == item.url) {
            if (item.hasFilter) {
              this.routeHasFilter = true;
              this.profile = false;
              this.showFilter = false;
              this.id = item.id;
            } else if (item.hasAction) {
              this.routeHasFilter = false;
              this.profile = item.hasAction;
              this.id = item.id;
              this.showFilter = false;
            } else {
              this.routeHasFilter = false;
              this.profile = false;
              this.showFilter = false;
              this.id = 0;
            }
          }
        }
      });
  }

  ngOnInit(): void {
    this.transactionFiltersForm = new FormGroup({
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      fromAmount: new FormControl(''),
      toAmount: new FormControl(''),
      type: new FormControl(),
      recordTake: new FormControl(10),
      recordSkip: new FormControl(0),
      ascSort: new FormControl(true)
    });

  }

  clickOutside() {
    this.showFilter = false;
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('RefreshToken');
    this.router.navigate(['/']);
  }

  loanFilter(event: MatRadioChange) {
    for (let item of this.loan) {
      item.checked = event.value == item.value;
    }
    this.shareData.filtersSub.next(event.value);
    this.showFilter = !this.showFilter;
  }

  transactionTypes(type: number) {
    switch (type) {
      case 160101 :
        this.transactionType.deposit = true;
        this.transactionType.withdraw = false;
        this.transactionType.all = false;
        break;
      case 160102 :
        this.transactionType.withdraw = true;
        this.transactionType.deposit = false;
        this.transactionType.all = false;
        break;
      case 0 :
        this.transactionType.all = true;
        this.transactionType.withdraw = false;
        this.transactionType.deposit = false;
    }
    this.type = type;
  }

  applyTransactionFilters(form: FormGroup) {
    form.value.type = this.type;
    this.shareData.transactionsFiltersSub.next(form.value);
    this.showFilter = !this.showFilter;
  }

}
