import { TestBed } from '@angular/core/testing';

import { DataDrivenService } from './data-driven.service';

describe('DataDrivenService', () => {
  let service: DataDrivenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDrivenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
