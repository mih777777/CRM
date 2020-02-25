import { TestBed } from '@angular/core/testing';

import { AuthService.TsService } from './auth-service.ts.service';

describe('AuthService.TsService', () => {
  let service: AuthService.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
