import { TestBed } from '@angular/core/testing';

import { DetailSatelitesService } from './detail-satelites.service';

describe('DetailSatelitesService', () => {
  let service: DetailSatelitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailSatelitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
