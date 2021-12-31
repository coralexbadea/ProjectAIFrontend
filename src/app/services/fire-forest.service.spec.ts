import { TestBed } from '@angular/core/testing';

import { FireForestService } from './fire-forest.service';

describe('FireForestService', () => {
  let service: FireForestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireForestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
