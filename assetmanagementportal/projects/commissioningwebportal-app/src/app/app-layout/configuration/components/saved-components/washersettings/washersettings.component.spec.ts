import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashersettingsComponent } from './washersettings.component';

describe('WashersettingsComponent', () => {
  let component: WashersettingsComponent;
  let fixture: ComponentFixture<WashersettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashersettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
