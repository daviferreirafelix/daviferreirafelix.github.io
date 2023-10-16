import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizacaoDeListaComponent } from './renderizacao-de-lista.component';

describe('RenderizacaoDeListaComponent', () => {
  let component: RenderizacaoDeListaComponent;
  let fixture: ComponentFixture<RenderizacaoDeListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderizacaoDeListaComponent]
    });
    fixture = TestBed.createComponent(RenderizacaoDeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
