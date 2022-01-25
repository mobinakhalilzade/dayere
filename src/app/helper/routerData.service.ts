import {Injectable} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class RouterDataService {
  routeName: any;
  hasFilter: any;

  constructor(private router: Router) {
    this.router.events.pipe(filter(
      e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.data).length > 0)),
      map(e => e instanceof ActivationEnd ? e.snapshot.data : {})
    ).subscribe(data => {
      if (data.routeName) {
        this.routeName = data.routeName;
        this.hasFilter = data.hasFilter;
      }
    });
    return this.routeName + this.hasFilter;
  }
}
