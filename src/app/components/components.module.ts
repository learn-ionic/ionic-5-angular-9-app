import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    MyModalComponent
  ],
  exports: [
    MyModalComponent
  ],
  entryComponents: [MyModalComponent]
})
export class ComponentsModule {}
