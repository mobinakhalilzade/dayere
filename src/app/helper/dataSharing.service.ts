import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  filtersSub: Subject<any> = new Subject<any>();
  transactionsFiltersSub: Subject<any> = new Subject<any>();
  fundId:Subject<number>=new Subject<number>();

  constructor() {
  }
}
