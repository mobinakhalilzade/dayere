import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'voteResult'
})
export class VoteResultPipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 180101 :
        return 'رای مثبت';
      case 180102:
        return 'رای منفی';
      case 180103 :
        return 'هنوز رای نداده';
      case 180104 :
        return 'عضو فعال';
      case 180105 :
        return 'عضو خارج شده';
      case 180106  :
        return 'عضو در حال خروج';
    }
  }

}
