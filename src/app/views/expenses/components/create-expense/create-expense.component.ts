import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
import { CurrencyInputComponent } from 'src/app/views/components/currency-input/currency-input.component';
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
  ],
})
export class CreateExpenseComponent {
  myForm: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    addIcons({ arrowBackOutline, lockClosed });

    this.myForm = this.fb.group({
      currency: ['', [Validators.required, Validators.minLength(5)]],
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
    console.log(this.myForm.value);
  }
}
