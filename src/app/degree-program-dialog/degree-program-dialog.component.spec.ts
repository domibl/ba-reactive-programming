import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeProgramDialogComponent } from './degree-program-dialog.component';

describe('DegreeProgramDialogComponent', () => {
  let component: DegreeProgramDialogComponent;
  let fixture: ComponentFixture<DegreeProgramDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeProgramDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeProgramDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
