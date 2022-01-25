import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ModalService {
  private modal: any;

  response: Subject<boolean> = new Subject<boolean>();

  initial = (modal: any) => {
    this.modal = modal;
  };

  open(type: string) {
    this.modal.open(type);
  }

  close(){
    this.modal.close();
  }
}
