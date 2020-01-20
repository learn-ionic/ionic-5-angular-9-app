import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
