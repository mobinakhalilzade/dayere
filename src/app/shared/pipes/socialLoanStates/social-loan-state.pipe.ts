import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'socialLoanState'
})
export class SocialLoanStatePipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 190201 :
        return 'ثبت شده';
      case 190202 :
        return 'تائید شده مدیر';
      case 190203 :
        return 'رد شده مدیر';
      case 190204 :
        return 'تائید شده مدیر و رد شده کاربر';
      case 190205 :
        return ' رد شده کاربر قبل از تائید';
      case 190206 :
        return 'تائید شده مدیر و دریافت شده توسط کاربر';
      case 190207 :
        return 'وام بسته شده';
    }
  }

}
