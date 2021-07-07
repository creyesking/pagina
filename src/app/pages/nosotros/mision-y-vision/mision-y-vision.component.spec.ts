import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionYVisionComponent } from './mision-y-vision.component';

describe('MisionYVisionComponent', () => {
  let component: MisionYVisionComponent;
  let fixture: ComponentFixture<MisionYVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionYVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionYVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
