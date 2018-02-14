import { TestBed, inject } from '@angular/core/testing';

import { CustomApiService } from './custom-api.service';

describe('CustomApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomApiService]
    });
  });

  it('should be created', inject([CustomApiService], (service: CustomApiService) => {
    expect(service).toBeTruthy();
  }));
});
