import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionA11yComponent } from './expansion-a11y.component';

describe('ExpansionA11yComponent', () => {
  let component: ExpansionA11yComponent;
  let fixture: ComponentFixture<ExpansionA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
