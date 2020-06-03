import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationAddComponent } from './realization-add.component';

describe('RealizationAddComponent', () => {
  let component: RealizationAddComponent;
  let fixture: ComponentFixture<RealizationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
