import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPageComponent } from './scroll-page.component';

describe('ScrollPageComponent', () => {
  let component: ScrollPageComponent;
  let fixture: ComponentFixture<ScrollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
