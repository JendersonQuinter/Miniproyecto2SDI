import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasInicioComponent } from './peliculas-inicio.component';

describe('PeliculasInicioComponent', () => {
  let component: PeliculasInicioComponent;
  let fixture: ComponentFixture<PeliculasInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
