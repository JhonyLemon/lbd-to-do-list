import { TestBed } from '@angular/core/testing';

import { NotificationTimerService } from './notification-timer.service';

describe('NotificationTimerService', () => {
  let service: NotificationTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
