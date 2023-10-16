import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDeRotaComponent } from './componente-de-rota.component';

describe('ComponenteDeRotaComponent', () => {
  let component: ComponenteDeRotaComponent;
  let fixture: ComponentFixture<ComponenteDeRotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDeRotaComponent]
    });
    fixture = TestBed.createComponent(ComponenteDeRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
