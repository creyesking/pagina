import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad6Component } from './actualidad6.component';

describe('Actualidad6Component', () => {
  let component: Actualidad6Component;
  let fixture: ComponentFixture<Actualidad6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
