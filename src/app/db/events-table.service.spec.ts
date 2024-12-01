import { TestBed } from '@angular/core/testing';

import { EventsTableService } from './events-table.service';

describe('EventsTableService', () => {
  let service: EventsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
