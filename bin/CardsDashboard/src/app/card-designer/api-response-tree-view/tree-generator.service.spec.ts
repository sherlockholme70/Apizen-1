import { TestBed } from '@angular/core/testing';

import { TreeGeneratorService } from './tree-generator.service';

describe('TreeGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeGeneratorService = TestBed.get(TreeGeneratorService);
    expect(service).toBeTruthy();
  });
});
