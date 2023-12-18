import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AlertType, Alert } from '../../models/alert-models.model';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;
  private defaultTimeOut: number = 15000;


  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string, timeOut: number = this.defaultTimeOut, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, timeOut, keepAfterRouteChange);
  }

  error(message: string, timeOut: number = this.defaultTimeOut, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, message, timeOut, keepAfterRouteChange);
  }

  info(message: string, timeOut: number = this.defaultTimeOut, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, timeOut, keepAfterRouteChange);
  }

  warn(message: string, timeOut: number = this.defaultTimeOut, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, timeOut, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, timeOut: number = this.defaultTimeOut, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ type: type, message: message, timeOut: timeOut });
  }

  clear() {
    // clear alerts
   // this.subject.next();
  }
  

}
