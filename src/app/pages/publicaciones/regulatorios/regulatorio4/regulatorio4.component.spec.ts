import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio4Component } from './regulatorio4.component';

describe('Regulatorio4Component', () => {
  let component: Regulatorio4Component;
  let fixture: ComponentFixture<Regulatorio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
