import { TestBed } from '@angular/core/testing';

import { KrampouzService } from './krampouz.service';

describe('KrampouzService', () => {
  let service: KrampouzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KrampouzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
