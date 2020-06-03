import { TestBed } from '@angular/core/testing';

import { AllCulinaryRecipesService } from './all-culinary-recipes.service';

describe('AllCulinaryRecipesService', () => {
  let service: AllCulinaryRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCulinaryRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
