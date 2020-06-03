import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationListComponent } from './realization-list.component';

describe('RealizationListComponent', () => {
  let component: RealizationListComponent;
  let fixture: ComponentFixture<RealizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
