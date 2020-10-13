import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfisPage } from './perfis.page';

describe('PerfisPage', () => {
  let component: PerfisPage;
  let fixture: ComponentFixture<PerfisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
