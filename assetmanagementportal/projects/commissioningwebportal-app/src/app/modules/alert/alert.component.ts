import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from '../../models/alert-models.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  to: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      this.alerts = [];
      if (!alert) {
        // clear alerts when an empty alert is received
        return;
      }
      // add alert to array
      this.alerts.push(alert);
      this.clearAlert(alert.timeOut);
    });
  }

  clearAlert(timeout: number) {
    if (this.to != null) {
      clearTimeout(this.to);
    }
    this.to = setTimeout(() => {
      this.alerts = [];
      clearTimeout(this.to);
    }, timeout);
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
