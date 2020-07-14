import { TestBed } from '@angular/core/testing';

import { CardDesignerService } from './card-designer.service';

describe('CardDesignerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDesignerService = TestBed.get(CardDesignerService);
    expect(service).toBeTruthy();
  });
});
