import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoriosComponent } from './regulatorios.component';

describe('RegulatoriosComponent', () => {
  let component: RegulatoriosComponent;
  let fixture: ComponentFixture<RegulatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegulatoriosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
