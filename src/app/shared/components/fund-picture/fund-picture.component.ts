import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fund-picture',
  templateUrl: './fund-picture.component.html',
  styleUrls: ['./fund-picture.component.css']
})
export class FundPictureComponent implements OnInit {

  abbreviation: any;

  @Input() inputName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.fundNameAbbreviation(this.inputName);
  }

  public fundNameAbbreviation(name: string) {
    let spaceIndex = name.indexOf(' ');
    if (spaceIndex > 0) {
      this.abbreviation = name.slice(0, 1) + ' ' + name.slice(spaceIndex+1, spaceIndex + 2);
    } else {
      this.abbreviation = name.slice(0, 1);
    }

  }

}
