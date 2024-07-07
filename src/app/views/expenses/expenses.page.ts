import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
  ],
})
export class ExpensesPage {}
