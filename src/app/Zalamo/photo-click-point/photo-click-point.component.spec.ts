import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoClickPointComponent } from './photo-click-point.component';

describe('PhotoClickPointComponent', () => {
  let component: PhotoClickPointComponent;
  let fixture: ComponentFixture<PhotoClickPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoClickPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoClickPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
