import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpHeaderService} from './httpHeader.service';
import {DataResponse, ErrorResponse} from '../interfaces/general.interface';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import {CustomErrorHandlerService} from './custom-error-handler.service';
import {Observable, Subscribable} from 'rxjs';


@Injectable()

export class GeneralService extends HttpHeaderService {

  constructor(
    public http: HttpClient,
  ) {
    super();
  }

  post(controller: string, data: any) {
    return this.http.post(`${this.url.API}${controller}`, data, {
      observe: 'events',
      headers: this.httpHeaders
    });
  }

  get(controller: string) {
    return this.http.get(`${this.url.API}${controller}`, {
      observe: 'events',
      headers: this.httpHeaders
    });
  }

}
