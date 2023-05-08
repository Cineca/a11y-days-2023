import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAccessibileComponent } from './pagina-accessibile.component';

describe('PaginaAccessibileComponent', () => {
  let component: PaginaAccessibileComponent;
  let fixture: ComponentFixture<PaginaAccessibileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAccessibileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAccessibileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
