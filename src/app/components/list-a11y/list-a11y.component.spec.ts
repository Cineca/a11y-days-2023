import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListA11yComponent } from './list-a11y.component';

describe('ListA11yComponent', () => {
  let component: ListA11yComponent;
  let fixture: ComponentFixture<ListA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
