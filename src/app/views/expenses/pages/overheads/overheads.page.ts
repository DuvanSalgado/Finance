import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, heart, settingsSharp } from 'ionicons/icons';
import { CarruselCompone } from '../../components/carrusel/carrusel.component';
import { CreateExpenseComponent } from '../../components/create-expense/create-expense.component';
@Component({
  selector: 'app-overheads',
  templateUrl: './overheads.page.html',
  styleUrls: ['./overheads.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    CarruselCompone,
  ],
})
export class OverheadsPage implements OnInit {
  public fecha = new Date();
  constructor(private modalCtrl: ModalController) {
    addIcons({ addOutline, settingsSharp, heart });
  }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateExpenseComponent,
    });
    modal.present();

    await modal.onWillDismiss();
  }
}
