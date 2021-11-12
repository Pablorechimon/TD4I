import { TestBed } from '@angular/core/testing';

import { FetchTopGamesService } from './fetch-top-games.service';

describe('FetchTopGamesService', () => {
  let service: FetchTopGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTopGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
