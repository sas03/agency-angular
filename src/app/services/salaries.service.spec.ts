import { TestBed, inject } from '@angular/core/testing';

import { SalariesService } from './salaries.service';

describe('SalariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalariesService]
    });
  });

  it('should be created', inject([SalariesService], (service: SalariesService) => {
    expect(service).toBeTruthy();
  }));
});
