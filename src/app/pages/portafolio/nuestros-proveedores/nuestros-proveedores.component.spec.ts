import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosProveedoresComponent } from './nuestros-proveedores.component';

describe('NuestrosProveedoresComponent', () => {
  let component: NuestrosProveedoresComponent;
  let fixture: ComponentFixture<NuestrosProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
