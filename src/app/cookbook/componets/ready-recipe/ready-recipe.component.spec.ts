import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyRecipeComponent } from './ready-recipe.component';

describe('ReadyRecipeComponent', () => {
  let component: ReadyRecipeComponent;
  let fixture: ComponentFixture<ReadyRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
