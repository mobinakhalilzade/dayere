import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {SplashService} from 'src/app/helper/splash.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'dayere-web';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private splashService: SplashService
  ) {
  }

  private updateBodyClass(customBodyClass?: string) {
    this.renderer.setAttribute(this.document?.body, 'class', '');
    if (customBodyClass) {
      this.renderer.addClass(this.document?.body, customBodyClass);
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashService.stop();
    }, 3000);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((data) => this.updateBodyClass(data.bodyClass));

  }

}

