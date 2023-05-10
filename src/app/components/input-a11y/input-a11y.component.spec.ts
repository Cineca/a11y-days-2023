import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputA11yComponent } from './input-a11y.component';

describe('InputA11yComponent', () => {
  let component: InputA11yComponent;
  let fixture: ComponentFixture<InputA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
