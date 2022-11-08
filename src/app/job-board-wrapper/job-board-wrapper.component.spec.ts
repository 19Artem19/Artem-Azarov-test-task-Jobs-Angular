import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardWrapperComponent } from './job-board-wrapper.component';

describe('JobBoardWrapperComponent', () => {
  let component: JobBoardWrapperComponent;
  let fixture: ComponentFixture<JobBoardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBoardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBoardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
