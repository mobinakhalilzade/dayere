import {Component, OnInit} from '@angular/core';
import * as data from '../../../../../assets/data.json';
import {Location} from '@angular/common';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  terms: any;

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.terms = data['terms'];
  }

  acceptTerms() {
    this.location.back();
  }

}
