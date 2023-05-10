import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuA11yComponent } from './menu-a11y.component';

describe('MenuA11yComponent', () => {
  let component: MenuA11yComponent;
  let fixture: ComponentFixture<MenuA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuA11yComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
