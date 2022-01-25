import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {

  amounts = [
    {amount: 10000000, active: false},
    {amount: 5000000, active: false},
    {amount: 15000000, active: false}
  ];
  times = [
    {time: "دوازده ماه", active: false},
    {time: "شش ماه", active: false},
    {time: "سه ماه", active: false}
  ];
  suggest = [
    {time: "دوازده ماه", active: false},
    {time: "شش ماه", active: false},
    {time: "سه ماه", active: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setAmount(value: number) {
    for (let item of this.amounts) {
      item.active = item.amount == value;
    }
  }

  setTime(value: string) {
    for (let item of this.times) {
      item.active = item.time == value;
    }
  }

}
