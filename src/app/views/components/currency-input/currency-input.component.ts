import { Component, OnInit, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonInput } from '@ionic/angular/standalone';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

@Component({
  selector: 'currency-input',
  template: `
    <ion-input
      labelPlacement="stacked"
      label="Valor"
      placeholder="$ 0.000"
      [formControl]="valueFormControl"
      [maskito]="cardMask"
      inputmode="numeric"
      [maskitoElement]="maskPredicate"
      (ionBlur)="onTouched()"
      (ionChange)="onChange($event.detail.value)"
    ></ion-input>
  `,
  standalone: true,
  imports: [MaskitoDirective, IonInput, ReactiveFormsModule],
})
export class CurrencyInputComponent implements ControlValueAccessor, OnInit {
  valueFormControl = new FormControl();
  readonly cardMask: MaskitoOptions = maskitoNumberOptionsGenerator({
    decimalSeparator: ',',
    thousandSeparator: '.',
    precision: 2,
    prefix: '$ ',
  });

  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as HTMLIonInputElement).getInputElement();

  constructor(@Optional() @Self() private controlDir: NgControl) {
    if (this.controlDir) this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this._initializevalueFormControl();
  }

  onTouched: () => void = () => {};
  onChange: (value: any) => void = () => {};

  writeValue(value: string): void {
    this.valueFormControl.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  private _initializevalueFormControl(): void {
    if (this.controlDir?.control) {
      const { control } = this.controlDir;

      this.valueFormControl.setValidators(control.validator || []);
      this.valueFormControl.updateValueAndValidity();
    }
  }
}
