/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddMomentService } from './add-moment.service';

describe('Service: AddMoment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddMomentService]
    });
  });

  it('should ...', inject([AddMomentService], (service: AddMomentService) => {
    expect(service).toBeTruthy();
  }));
});
