import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyPlaneComponent } from './fly-plane.component';

describe('FlyPlaneComponent', () => {
  let component: FlyPlaneComponent;
  let fixture: ComponentFixture<FlyPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
