import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysComponent } from './day-custom.component';

describe('WeekdaysComponent', () => {
  let component: WeekdaysComponent;
  let fixture: ComponentFixture<WeekdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
