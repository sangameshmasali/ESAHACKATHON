/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { Alert, AlertType } from '@app-share';

class AlertServiceMock {
  getAlert(): Observable<Alert> {
    return of(mockAlert(AlertType.Success));
  }
}

function mockAlert(alertType: AlertType): Alert {
  return {
    type: alertType,
    message: 'Success',
    timeOut : 1000
  };
}

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: AlertService, useClass: AlertServiceMock }]
    }).compileComponents();
    alertService = TestBed.get(AlertService);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove alert', () => {
    expect(component).toBeTruthy();
    expect(component.alerts.length).toEqual(1);
    const newAlert = mockAlert(AlertType.Success);
    component.alerts.push(newAlert);
    expect(component.alerts.length).toEqual(2);
    component.removeAlert(newAlert);
    expect(component.alerts.length).toEqual(1);
  });

  it('should apply success css class', () => {
    expect(component).toBeTruthy();
    expect(component.cssClass(mockAlert(AlertType.Success))).toEqual('alert alert-success');
  });

  it('should apply Error css class', () => {
    expect(component).toBeTruthy();
    expect(component.cssClass(mockAlert(AlertType.Error))).toEqual('alert alert-danger');
  });

  it('should apply info css class', () => {
    expect(component).toBeTruthy();
    expect(component.cssClass(mockAlert(AlertType.Info))).toEqual('alert alert-info');
  });

  it('should apply warning css class', () => {
    expect(component).toBeTruthy();
    expect(component.cssClass(mockAlert(AlertType.Warning))).toEqual('alert alert-warning');
  });

  it('should apply no css if alert invalid', () => {
    expect(component).toBeTruthy();
    expect(component.cssClass(null)).toBeUndefined();
  });

  it('should clear alert', () => {
    expect(component).toBeTruthy();
    expect(component.alerts.length).toEqual(1);
    const newAlert = mockAlert(AlertType.Success);
    component.alerts.push(newAlert);
    expect(component.to).toBeGreaterThan(0);
  });

});
