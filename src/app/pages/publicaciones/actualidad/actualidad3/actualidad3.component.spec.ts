import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad3Component } from './actualidad3.component';

describe('Actualidad3Component', () => {
  let component: Actualidad3Component;
  let fixture: ComponentFixture<Actualidad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
