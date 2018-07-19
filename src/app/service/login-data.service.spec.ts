/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginDataService } from './login-data.service';

describe('LoginDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDataService]
    });
  });

  it('should ...', inject([LoginDataService], (service: LoginDataService) => {
    expect(service).toBeTruthy();
  }));
});
