import { TestBed, inject } from '@angular/core/testing';

import { DayService } from './day.service';

describe('DayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayService]
    });
  });

  it('should ...', inject([DayService], (service: DayService) => {
    expect(service).toBeTruthy();
  }));
});
