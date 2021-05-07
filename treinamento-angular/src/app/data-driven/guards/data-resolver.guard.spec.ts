import { TestBed } from '@angular/core/testing';

import { DataResolverGuard } from './data-resolver.guard';

describe('DataResolverGuard', () => {
  let guard: DataResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DataResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
