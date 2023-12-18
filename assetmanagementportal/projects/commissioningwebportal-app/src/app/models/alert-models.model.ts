export class Alert {
  type: AlertType;
  message: string;
  timeOut: number;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
