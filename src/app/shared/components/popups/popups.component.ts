import {Component, Inject, Injectable, OnInit} from '@angular/core';

declare const $: any;

export interface IPopupsComponent {

  confirm(): void;

  cancel(): void;
}

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
@Injectable()
export class PopupsComponent implements OnInit {

  //private modal: any;
  popupType = {
    warning: false, danger: false, success: false
  };
  type!: string;
 // private _iPopupsComponent: IPopupsComponent;

  constructor() {
    console.log("544564654564");
    // this._iPopupsComponent = value;
  }

  ngOnInit() {
    console.log("544564654564");
    //this.modal = this;
    //this.modalService.initial(this);
    // this.popupType.warning = true;
  }

  public open1111(type: string) : void {
    console.log("kjhgglg")
    this.type = type;
    switch (this.type) {
      case 'warning':
        this.popupType.warning = true;
        break;
      case 'danger':
        this.popupType.danger = true;
        break;
      case 'success':
        this.popupType.success = true;
        break;
    }
    console.log("sssss")
    $('#exampleModal').modal('show');
    console.log("sssss")

  }

  close() {
    $('#exampleModal').modal('hide');
  }

  yes(response: boolean) {
    //this.modalService.response.next(response);
   // this._iPopupsComponent.confirm();
  }
}
