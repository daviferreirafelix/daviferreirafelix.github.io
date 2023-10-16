import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendoEventosComponent } from './fazendo-eventos.component';

describe('FazendoEventosComponent', () => {
  let component: FazendoEventosComponent;
  let fixture: ComponentFixture<FazendoEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FazendoEventosComponent]
    });
    fixture = TestBed.createComponent(FazendoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
