import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { IonNote } from '@ionic/angular/standalone';
@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  standalone: true,
  imports: [IonNote],
})
export class ErrorMessagesComponent {
  control = input.required<AbstractControl | null>();
}
