import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCreationComponent } from './food-creation.component';

describe('FoodCreationComponent', () => {
  let component: FoodCreationComponent;
  let fixture: ComponentFixture<FoodCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
