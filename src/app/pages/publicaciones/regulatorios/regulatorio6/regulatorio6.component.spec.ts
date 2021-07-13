import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio6Component } from './regulatorio6.component';

describe('Regulatorio6Component', () => {
  let component: Regulatorio6Component;
  let fixture: ComponentFixture<Regulatorio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
