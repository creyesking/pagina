import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio2Component } from './regulatorio2.component';

describe('Regulatorio2Component', () => {
  let component: Regulatorio2Component;
  let fixture: ComponentFixture<Regulatorio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
