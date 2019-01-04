import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeProgrammesComponent } from './degree-programmes.component';

describe('DegreeProgrammesComponent', () => {
  let component: DegreeProgrammesComponent;
  let fixture: ComponentFixture<DegreeProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeProgrammesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
