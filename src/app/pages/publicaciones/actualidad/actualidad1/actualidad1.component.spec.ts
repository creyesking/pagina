import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad1Component } from './actualidad1.component';

describe('Actualidad1Component', () => {
  let component: Actualidad1Component;
  let fixture: ComponentFixture<Actualidad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
