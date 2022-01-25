import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()

export class CustomErrorHandlerService {
  constructor(
    private snack: MatSnackBar
  ) {}

  showError(message: any) {
    console.log(message);
    this.snack.open(message, '', {
      duration: 2000
    });
  }

}
