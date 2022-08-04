import { TestBed } from '@angular/core/testing';

import { NotificationEventServiceService } from './notification-event-service.service';

describe('NotificationEventServiceService', () => {
  let service: NotificationEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
