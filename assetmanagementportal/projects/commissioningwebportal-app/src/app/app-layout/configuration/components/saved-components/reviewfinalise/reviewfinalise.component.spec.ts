import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfinaliseComponent } from './reviewfinalise.component';

describe('ReviewfinaliseComponent', () => {
  let component: ReviewfinaliseComponent;
  let fixture: ComponentFixture<ReviewfinaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewfinaliseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewfinaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
