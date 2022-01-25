import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fund-account',
  templateUrl: './fund-account.component.html',
  styleUrls: ['./fund-account.component.css']
})
export class FundAccountComponent implements OnInit {

  transaction = [
    {type: 160102, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160102, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160101, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160102, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160101, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160101, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
    {type: 160102, amount: '10000', description: 'واریز از درگاه پارسیان', shamsiDate: '1399/10/05'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
