import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcscontrollerPumpsettingComponent } from './alcscontroller-pumpsetting.component';

describe('AlcscontrollerPumpsettingComponent', () => {
  let component: AlcscontrollerPumpsettingComponent;
  let fixture: ComponentFixture<AlcscontrollerPumpsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcscontrollerPumpsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcscontrollerPumpsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
