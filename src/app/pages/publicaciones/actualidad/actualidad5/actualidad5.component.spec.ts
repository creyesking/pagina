import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad5Component } from './actualidad5.component';

describe('Actualidad5Component', () => {
  let component: Actualidad5Component;
  let fixture: ComponentFixture<Actualidad5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
