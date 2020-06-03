import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHashtagAddComponent } from './recipe-hashtag-add.component';

describe('RecipeHashtagAddComponent', () => {
  let component: RecipeHashtagAddComponent;
  let fixture: ComponentFixture<RecipeHashtagAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHashtagAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHashtagAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
