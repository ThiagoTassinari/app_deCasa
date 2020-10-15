import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupoServicePage } from './grupo-service.page';

describe('GrupoServicePage', () => {
  let component: GrupoServicePage;
  let fixture: ComponentFixture<GrupoServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
