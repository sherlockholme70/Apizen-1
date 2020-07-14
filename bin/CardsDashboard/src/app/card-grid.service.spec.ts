import { TestBed } from '@angular/core/testing';

import { CardGridService } from './card-grid.service';

describe('CardGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardGridService = TestBed.get(CardGridService);
    expect(service).toBeTruthy();
  });
});
