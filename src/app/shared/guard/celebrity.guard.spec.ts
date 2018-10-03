import { TestBed, async, inject } from '@angular/core/testing';

import { CelebrityGuard } from './celebrity.guard';

describe('CelebrityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CelebrityGuard]
    });
  });

  it('should ...', inject([CelebrityGuard], (guard: CelebrityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
