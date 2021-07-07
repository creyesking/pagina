import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalariaComponent } from './hospitalaria.component';

describe('HospitalariaComponent', () => {
  let component: HospitalariaComponent;
  let fixture: ComponentFixture<HospitalariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
