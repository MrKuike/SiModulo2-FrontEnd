import { TestBed } from '@angular/core/testing';

import { ServEventoService } from './serv-evento.service';

describe('ServEventoService', () => {
  let service: ServEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
