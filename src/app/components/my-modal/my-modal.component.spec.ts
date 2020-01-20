import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyModalComponent } from './my-modal.component';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
