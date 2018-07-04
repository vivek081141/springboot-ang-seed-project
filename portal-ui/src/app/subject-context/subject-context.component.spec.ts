import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectContextComponent } from './subject-context.component';

describe('SubjectContextComponent', () => {
  let component: SubjectContextComponent;
  let fixture: ComponentFixture<SubjectContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
