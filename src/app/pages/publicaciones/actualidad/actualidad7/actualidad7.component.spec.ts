import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad7Component } from './actualidad7.component';

describe('Actualidad7Component', () => {
  let component: Actualidad7Component;
  let fixture: ComponentFixture<Actualidad7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
