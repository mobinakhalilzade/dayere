import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'amountSeparator'
})
export class AmountSeparatorPipe implements PipeTransform {

  transform(input: any) {
    if (input == String) {
      return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    } else {
      input = String(input);
      return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

}
