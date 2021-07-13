import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad2Component } from './actualidad2.component';

describe('Actualidad2Component', () => {
  let component: Actualidad2Component;
  let fixture: ComponentFixture<Actualidad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
