import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxUiTaskComponent } from './ux-ui-task.component';

describe('UxUiTaskComponent', () => {
  let component: UxUiTaskComponent;
  let fixture: ComponentFixture<UxUiTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxUiTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxUiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
