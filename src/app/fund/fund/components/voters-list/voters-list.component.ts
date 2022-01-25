import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.css']
})
export class VotersListComponent implements OnInit {


  votersList=[
    {
      name:"سارا عظیمی", vote:-1
    },
    {
      name:"سارا عظیمی", vote:0
    },
    {
      name:"سارا عظیمی", vote:1
    },
    {
      name:"سارا عظیمی", vote:-1
    },
    {
      name:"سارا عظیمی", vote:1
    },
    {
      name:"سارا عظیمی", vote:0
    },
    {
      name:"سارا عظیمی", vote:1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
