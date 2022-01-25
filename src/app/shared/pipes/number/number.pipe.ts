import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 1 :
        return 'اول';
      case 2 :
        return 'دوم';
      case 3 :
        return 'سوم';
      case 4 :
        return 'چهارم';
      case 5 :
        return 'پنجم';
      case 6 :
        return 'ششم';
      case 7 :
        return 'هفتم';
      case 8 :
        return 'هشتم';
      case 9 :
        return 'نهم';
      case 10 :
        return 'دهم';
      case 11 :
        return 'یازدهم';
      case 12 :
        return 'دوازدهم';
      case 13 :
        return 'سیزدهم';
      case 14 :
        return 'چهاردهم';
      case 15 :
        return 'پانزدهم';
      case 16 :
        return 'شانزدهم';
      case 17 :
        return 'هفدهم';
      case 18 :
        return 'هیجدهم';
      case 19 :
        return 'نوزدهم';
      case 20 :
        return 'بیستم';
      case 21 :
        return 'بیست و یکم';
      case 22 :
        return 'بیست و دوم';
      case 23 :
        return 'بیست و سوم';
      case 24 :
        return 'بیست و چهارم';
      case 25 :
        return 'بیست و پنجم';
      case 26 :
        return 'بیست و ششم';
      case 27 :
        return 'بیست و هفتم';
      case 28 :
        return 'بیست و هشتم';
      case 29 :
        return 'بیست و نهم';
      case 30 :
        return 'سی ام';
      case 31 :
        return 'سی و یکم';
      case 32 :
        return 'سی و دوم';
      case 33 :
        return 'سی و سوم';
      case 34 :
        return 'سی و چهارم';
      case 35 :
        return 'سی و پنجم';
      case 36 :
        return 'سی و شسشم';

    }
  }

}
