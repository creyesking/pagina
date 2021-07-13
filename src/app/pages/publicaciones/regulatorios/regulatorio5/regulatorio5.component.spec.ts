import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio5Component } from './regulatorio5.component';

describe('Regulatorio5Component', () => {
  let component: Regulatorio5Component;
  let fixture: ComponentFixture<Regulatorio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
