import { TestBed } from '@angular/core/testing';

import { AuthclsGuard } from './authcls.guard';

describe('AuthclsGuard', () => {
  let guard: AuthclsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthclsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
