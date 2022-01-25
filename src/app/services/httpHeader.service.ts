import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()

export class HttpHeaderService {

  token = localStorage.getItem('Token');
  RefreshToken = localStorage.getItem('RefreshToken');

  options = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer' + ' ' + this.token,
    'Abp.TenantId': '1'
  };

  httpHeaders = new HttpHeaders(this.options);

  readonly url = environment;


  constructor() {
  }

  updateHeader(token: any) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + ' ' + token,
      'Abp.TenantId': '1'
    });
  }
}
