import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDevicesComponent } from './screen-devices.component';

describe('ScreenDevicesComponent', () => {
  let component: ScreenDevicesComponent;
  let fixture: ComponentFixture<ScreenDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
