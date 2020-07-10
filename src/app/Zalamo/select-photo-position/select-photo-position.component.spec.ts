import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPhotoPositionComponent } from './select-photo-position.component';

describe('SelectPhotoPositionComponent', () => {
  let component: SelectPhotoPositionComponent;
  let fixture: ComponentFixture<SelectPhotoPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPhotoPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPhotoPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
