import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, catchError, finalize} from 'rxjs/operators';
import {ResetTokenInput} from '../interfaces/account.interface';
import {DataResponse} from '../interfaces/general.interface';
import {LoadingService} from '../helper/loading.service';
import {GeneralService} from './general.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService extends GeneralService implements HttpInterceptor {

  activeRequests: number = 0;

  constructor(
    public router: Router,
    private snack: MatSnackBar,
    private loadingScreenService: LoadingService,
    public http: HttpClient) {
    super(http);
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingScreenService.startLoading();
    }
    this.activeRequests++;

    return next.handle(request).pipe(
      retry(1),
      // @ts-ignore
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          let command: ResetTokenInput = {
            // @ts-ignore
            refreshToken: localStorage.getItem('RefreshToken')
          };
          this.post(this.url.services.Account.ResetToken, command).subscribe((response: any) => {
            if (response.status == 200) {
              const body = response.body as DataResponse<any>;
              if (body.success) {
                localStorage.setItem('Token', body.result.token);
                this.updateHeader(body.result.token);
                location.reload();
              }
            } else {
              this.router.navigate(['/']).then();
            }
          });
        } else if (error.status === 500) {
          //common error codes
          if (error.error.error.code == 100010) {
            this.router.navigate(['/login/authentication']).then();
          }
          this.snack.open(error.error.error.message, '', {
            duration: 2000
          });
        }
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingScreenService.stopLoading();
        }
      }));
  }

}

