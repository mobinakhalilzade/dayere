import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy} from '@angular/core';
import {LoadingService} from '../helper/loading.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit, OnDestroy {
  loadingSubscription!: Subscription;

  constructor(
    private loadingScreenService: LoadingService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loading$.pipe().subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
