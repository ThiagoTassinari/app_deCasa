import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListServicePage } from './list-service.page';

describe('ListServicePage', () => {
  let component: ListServicePage;
  let fixture: ComponentFixture<ListServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
