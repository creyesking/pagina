import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NproveedoresComponent } from './nproveedores.component';

describe('NproveedoresComponent', () => {
  let component: NproveedoresComponent;
  let fixture: ComponentFixture<NproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NproveedoresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
