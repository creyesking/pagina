import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio1Component } from './regulatorio1.component';

describe('Regulatorio1Component', () => {
  let component: Regulatorio1Component;
  let fixture: ComponentFixture<Regulatorio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
