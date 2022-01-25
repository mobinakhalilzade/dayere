import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'socialFundPriority'
})
export class SocialFundPriorityPipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 150201 :
        return 'الویت بندی ها به صورت رندوم و با قرعه کشی مشخص میشود.';
      case 150202:
        return 'الویت بندی ها به صورت دستی مشخص میشود.';
    }
  }


}
