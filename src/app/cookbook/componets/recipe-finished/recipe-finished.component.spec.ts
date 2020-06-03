import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFinishedComponent } from './recipe-finished.component';

describe('RecipeFinishedComponent', () => {
  let component: RecipeFinishedComponent;
  let fixture: ComponentFixture<RecipeFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
