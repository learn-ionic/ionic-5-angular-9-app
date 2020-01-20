import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { MyModalComponent } from '../../components/my-modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet) {}

  async showModal() {
    const topicOverviewModal = await this.modalController.create({
      component: MyModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await topicOverviewModal.present();
  }

}
