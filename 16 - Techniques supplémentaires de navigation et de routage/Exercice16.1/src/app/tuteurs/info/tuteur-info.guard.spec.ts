import { TestBed, async, inject } from '@angular/core/testing';

import { TuteurInfoGuard } from './tuteur-info.guard';

describe('TuteurInfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuteurInfoGuard]
    });
  });

  it('should ...', inject([TuteurInfoGuard], (guard: TuteurInfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
