import { TestBed } from '@angular/core/testing';

import { TuteurService } from './tuteur.service';

describe('TuteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuteurService = TestBed.get(TuteurService);
    expect(service).toBeTruthy();
  });
});
