import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeTratamientoDeDatosComponent } from './politica-de-tratamiento-de-datos.component';

describe('PoliticaDeTratamientoDeDatosComponent', () => {
  let component: PoliticaDeTratamientoDeDatosComponent;
  let fixture: ComponentFixture<PoliticaDeTratamientoDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliticaDeTratamientoDeDatosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDeTratamientoDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
