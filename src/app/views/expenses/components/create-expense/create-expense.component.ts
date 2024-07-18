import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CurrencyInputComponent } from '@currencyInput';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, lockClosed } from 'ionicons/icons';
import { ErrorMessagesComponent } from '@errorMessages';
import { minCharValidator } from './validaciones';
@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss'],
  standalone: true,
  imports: [
    CurrencyInputComponent,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonButton,
    IonTitle,
    IonContent,
    IonNote,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonFooter,
    ReactiveFormsModule,
    IonInput,
    IonButtons,
    IonIcon,
    ErrorMessagesComponent
  ],
})
export class CreateExpenseComponent {
  createExpense: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    addIcons({ arrowBackOutline, lockClosed });

    this.createExpense = this.fb.group({
      currency: ['', [Validators.required, minCharValidator(3)]],
      paymentMethods: ['', Validators.required],
      categories: ['', Validators.required],
      type: ['', Validators.required],
      notes: [''],
    });
  }

  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  save(): void {
    this.createExpense.markAllAsTouched();
    console.log(this.createExpense);
  }
}
