import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'iconbar',
  templateUrl: './iconbar.component.html',
  styleUrls: ['./iconbar.component.css']
})
export class IconbarComponent implements OnInit {

  fillColor: string = '#FF9900';

  constructor() { }

  ngOnInit(): void {

  }

}
