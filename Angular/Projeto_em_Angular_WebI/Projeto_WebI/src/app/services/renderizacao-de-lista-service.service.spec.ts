import { TestBed } from '@angular/core/testing';

import { RenderizacaoDeListaServiceService } from './renderizacao-de-lista-service.service';

describe('RenderizacaoDeListaServiceService', () => {
  let service: RenderizacaoDeListaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderizacaoDeListaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
