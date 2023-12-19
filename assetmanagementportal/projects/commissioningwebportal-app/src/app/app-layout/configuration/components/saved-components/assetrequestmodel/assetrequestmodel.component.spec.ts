import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetrequestmodelComponent } from './assetrequestmodel.component';

describe('AssetrequestmodelComponent', () => {
  let component: AssetrequestmodelComponent;
  let fixture: ComponentFixture<AssetrequestmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetrequestmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetrequestmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
