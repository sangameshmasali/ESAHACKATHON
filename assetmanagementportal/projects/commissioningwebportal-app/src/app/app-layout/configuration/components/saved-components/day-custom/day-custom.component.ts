import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-day-custom',
  templateUrl: './day-custom.component.html',
  styleUrls: ['./day-custom.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:WeekdaysComponent,
    multi:true
  }]
})
export class WeekdaysComponent implements OnInit, ControlValueAccessor  {

  @Input() value: string;
  togle:boolean = false;
  onChange:(value:boolean) => void;
  onTouched:() => void;

  constructor() { }
  writeValue(obj: boolean): void {
    this.togle = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  setValue() {
    this.togle = !this.togle;
    this.onChange(this.togle);
    this.onTouched();
  }
}
