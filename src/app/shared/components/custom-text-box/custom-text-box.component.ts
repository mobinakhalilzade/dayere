import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'text-box',
  templateUrl: './custom-text-box.component.html',
  styleUrls: ['./custom-text-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextBoxComponent),
      multi: true
    }
  ]
})
export class CustomTextBoxComponent extends EventEmitter implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() minlength: number = 0;
  @Input() disabled: boolean = false;
  @Input() data: string = '';
  @Input() type: string = '';
  @Output() text:any = new EventEmitter<any>() ;
  @Output() textModel:any = new EventEmitter<any>() ;

  constructor() {
    super();
  }

  public onChangeFn = (_: any) => { };

  public onTouchedFn = () => { };

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.data = obj;
  }

  public onChange() {
    this.onChangeFn(this.data);
    this.text.emit(this.data);
    this.textModel.emit(this.data);
  }
}
