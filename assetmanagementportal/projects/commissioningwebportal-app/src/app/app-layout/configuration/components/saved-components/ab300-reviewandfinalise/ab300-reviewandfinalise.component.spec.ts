import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AB300ReviewfinaliseComponent } from './ab300-reviewandfinalise.component';

describe('ReviewfinaliseComponent', () => {
  let component: AB300ReviewfinaliseComponent;
  let fixture: ComponentFixture<AB300ReviewfinaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AB300ReviewfinaliseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AB300ReviewfinaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});