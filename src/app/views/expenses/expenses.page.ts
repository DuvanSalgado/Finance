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
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>expenses</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="overhead"> Generales </ion-tab-button>
          <ion-tab-button tab="fixed"> Fijos </ion-tab-button>
          <ion-tab-button tab="category"> Categiria </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  `,
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
