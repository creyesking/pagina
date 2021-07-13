import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad4Component } from './actualidad4.component';

describe('Actualidad4Component', () => {
  let component: Actualidad4Component;
  let fixture: ComponentFixture<Actualidad4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actualidad4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actualidad4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
