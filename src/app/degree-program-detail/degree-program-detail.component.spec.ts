import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeProgramDetailComponent } from './degree-program-detail.component';

describe('DegreeProgramDetailComponent', () => {
  let component: DegreeProgramDetailComponent;
  let fixture: ComponentFixture<DegreeProgramDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeProgramDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
