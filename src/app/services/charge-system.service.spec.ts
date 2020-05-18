import { TestBed } from '@angular/core/testing';

import { ChargeSystemService } from '../services/charge-system.service';

describe('ChargeSystemService', () => {
  let service: ChargeSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
