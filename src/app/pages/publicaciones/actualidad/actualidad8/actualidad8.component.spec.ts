import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad8Component } from './actualidad8.component';

describe('Actualidad8Component', () => {
  let component: Actualidad8Component;
  let fixture: ComponentFixture<Actualidad8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
