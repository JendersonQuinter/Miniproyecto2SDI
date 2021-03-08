import { TestBed } from '@angular/core/testing';

import { AutenGuard } from './auten.guard';

describe('AutenGuard', () => {
  let guard: AutenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
