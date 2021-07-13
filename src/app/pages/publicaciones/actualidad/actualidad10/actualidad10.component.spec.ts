import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad10Component } from './actualidad10.component';

describe('Actualidad10Component', () => {
  let component: Actualidad10Component;
  let fixture: ComponentFixture<Actualidad10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
