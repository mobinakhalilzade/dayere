import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-requests',
  templateUrl: './exit-requests.component.html',
  styleUrls: ['./exit-requests.component.css']
})
export class ExitRequestsComponent implements OnInit {

  exitRequestsList = [
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
    {name: 'سارا عظیمی', date: 'فروردین 1400'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
