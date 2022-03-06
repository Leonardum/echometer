import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmTaskComponent } from './algorithm-task.component';

describe('AlgorithmTaskComponent', () => {
  let component: AlgorithmTaskComponent;
  let fixture: ComponentFixture<AlgorithmTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
