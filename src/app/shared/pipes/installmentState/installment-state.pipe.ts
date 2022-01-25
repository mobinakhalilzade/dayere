import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'installmentState'
})
export class InstallmentStatePipe implements PipeTransform {

  transform(value: unknown): any {
    switch (value) {
      case 190301 :
        return '';
      case 190302:
        return '';
      case 190303 :
        return 'سررسید';
      case 190304 :
        return 'معوق';
    }
  }

}
