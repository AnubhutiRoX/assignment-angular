import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDirectiveComponent } from './learn-directive.component';

describe('LearnDirectiveComponent', () => {
  let component: LearnDirectiveComponent;
  let fixture: ComponentFixture<LearnDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
