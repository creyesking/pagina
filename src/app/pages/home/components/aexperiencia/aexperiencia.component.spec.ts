import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AexperienciaComponent } from './aexperiencia.component';

describe('AexperienciaComponent', () => {
  let component: AexperienciaComponent;
  let fixture: ComponentFixture<AexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AexperienciaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
