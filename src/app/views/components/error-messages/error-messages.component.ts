import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IonNote } from '@ionic/angular/standalone';
@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
  standalone: true,
  imports: [IonNote],
})
export class ErrorMessagesComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  shouldShowErrors = false;

  private defaultErrorMessages: { [key: string]: (error?: any) => string } = {
    required: () => 'Este campo es requerido',
    minlength: (error) => `Mínimo ${error.requiredLength} caracteres`,
  };

  ngOnInit() {
    console.log(this.formGroup.get(this.controlName));


  }

  get errorMessage(): string {
    const control = this.formGroup.get(this.controlName);
    console.log(control);
    
    if (control && control.errors) {
      const firstKey = Object.keys(control.errors)[0];
      return this.defaultErrorMessages[firstKey](control.errors[firstKey]);
    }
    return '';
  }
}
