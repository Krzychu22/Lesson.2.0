import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCulinaryRecipesComponent } from './all-culinary-recipes.component';

describe('AllCulinaryRecipesComponent', () => {
  let component: AllCulinaryRecipesComponent;
  let fixture: ComponentFixture<AllCulinaryRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCulinaryRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCulinaryRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
