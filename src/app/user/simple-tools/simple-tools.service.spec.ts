import { TestBed } from '@angular/core/testing';

import { SimpleToolsService } from './simple-tools.service';

describe('SimpleToolsService', () => {
  let service: SimpleToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
