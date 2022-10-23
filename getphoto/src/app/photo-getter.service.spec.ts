import { TestBed } from '@angular/core/testing';

import { PhotoGetterService } from './photo-getter.service';

describe('PhotoGetterService', () => {
  let service: PhotoGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
