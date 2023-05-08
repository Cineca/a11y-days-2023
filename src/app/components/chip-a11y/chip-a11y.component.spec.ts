import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipA11yComponent } from './chip-a11y.component';

describe('ChipA11yComponent', () => {
  let component: ChipA11yComponent;
  let fixture: ComponentFixture<ChipA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
