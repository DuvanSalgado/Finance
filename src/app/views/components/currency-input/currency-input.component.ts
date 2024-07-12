import { Component, OnDestroy, OnInit, Optional, Self } from '@angular/core';
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
import { Subscription } from 'rxjs';

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
    ></ion-input>
  `,
  standalone: true,
  imports: [MaskitoDirective, IonInput, ReactiveFormsModule],
})
export class CurrencyInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  valueFormControl = new FormControl();
  private valueChangesSubscription: Subscription | undefined;
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

  ngOnDestroy() {
    this.valueChangesSubscription?.unsubscribe();
  }

  writeValue(value: string): void {
    this.valueFormControl.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  private _initializevalueFormControl(): void {
    if (this.controlDir?.control) {
      const { control } = this.controlDir;

      this.valueFormControl.setValidators(control.validator || []);
      this.valueFormControl.updateValueAndValidity();

      this.valueChangesSubscription?.add(
        this.valueFormControl.valueChanges.subscribe(this._onChange)
      );
    }
  }

  private _onChange: (value: any) => void = () => {};
}
