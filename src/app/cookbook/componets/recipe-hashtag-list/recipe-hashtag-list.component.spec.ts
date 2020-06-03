import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHashtagListComponent } from './recipe-hashtag-list.component';

describe('RecipeHashtagListComponent', () => {
  let component: RecipeHashtagListComponent;
  let fixture: ComponentFixture<RecipeHashtagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHashtagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHashtagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
