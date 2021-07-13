import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestamosComponent } from './destamos.component';

describe('DestamosComponent', () => {
  let component: DestamosComponent;
  let fixture: ComponentFixture<DestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestamosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
