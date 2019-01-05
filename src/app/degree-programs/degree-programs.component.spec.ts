import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeProgramsComponent } from './degree-programs.component';

describe('DegreeProgramsComponent', () => {
  let component: DegreeProgramsComponent;
  let fixture: ComponentFixture<DegreeProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
