import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverAnimationComponent } from './cover-animation.component';

describe('CoverAnimationComponent', () => {
  let component: CoverAnimationComponent;
  let fixture: ComponentFixture<CoverAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
