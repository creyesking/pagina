import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulatorio3Component } from './regulatorio3.component';

describe('Regulatorio3Component', () => {
  let component: Regulatorio3Component;
  let fixture: ComponentFixture<Regulatorio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regulatorio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulatorio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
