import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartServicePage } from './cart-service.page';

describe('CartServicePage', () => {
  let component: CartServicePage;
  let fixture: ComponentFixture<CartServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
