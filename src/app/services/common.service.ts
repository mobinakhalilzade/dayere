import {DataResponse} from '../interfaces/general.interfaces';
import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {HttpClient} from '@angular/common/http';
import {FindReasonsDto, FindReasonsInput} from '../interfaces/common.interfaces';
import {CustomErrorHandlerService} from './custom-error-handler.service';

export interface IFindReasons {
  onSuccessFindReasons(data: FindReasonsDto): void;
}

@Injectable()

export class CommonServices extends GeneralService {

  constructor(
   public http: HttpClient,
    public customErrorHandler: CustomErrorHandlerService) {
    super(http);
  }

  findReasons(input: FindReasonsInput, action: IFindReasons) {
    this.post(this.url.services.Common.FindReasons, input).subscribe((response: any) => {
      if (response.status == 200) {
        const body = response.body as DataResponse<any>;
        if (body.success) {
          action.onSuccessFindReasons(body.result);
        }
      }
    });
  }

}
