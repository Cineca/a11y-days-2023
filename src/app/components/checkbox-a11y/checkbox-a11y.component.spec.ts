import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxA11yComponent } from './checkbox-a11y.component';

describe('CheckboxA11yComponent', () => {
  let component: CheckboxA11yComponent;
  let fixture: ComponentFixture<CheckboxA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
