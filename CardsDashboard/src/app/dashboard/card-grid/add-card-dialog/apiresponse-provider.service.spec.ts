import { TestBed } from '@angular/core/testing';

import { APIResponseProviderService } from './apiresponse-provider.service';

describe('APIResponseProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIResponseProviderService = TestBed.get(APIResponseProviderService);
    expect(service).toBeTruthy();
  });
});
