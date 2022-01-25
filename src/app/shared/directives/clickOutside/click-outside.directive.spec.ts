import { ClickOutsideDirective } from './click-outside.directive';
import {ElementRef} from '@angular/core';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    let  elRefi: any ;
    const directive = new ClickOutsideDirective(elRefi);
    expect(directive).toBeTruthy();
  });
});
