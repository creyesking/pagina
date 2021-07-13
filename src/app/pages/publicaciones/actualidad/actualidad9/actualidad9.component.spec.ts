import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad9Component } from './actualidad9.component';

describe('Actualidad9Component', () => {
  let component: Actualidad9Component;
  let fixture: ComponentFixture<Actualidad9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
