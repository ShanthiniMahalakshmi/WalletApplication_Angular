import { TestBed } from '@angular/core/testing';

import { WalletbackendService } from './walletbackend.service';

describe('WalletbackendService', () => {
  let service: WalletbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
