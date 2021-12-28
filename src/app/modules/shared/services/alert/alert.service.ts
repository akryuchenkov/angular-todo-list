import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isShow: boolean = false;
  type: 'success' | 'error' | 'info' = 'info';
  message: string = '';

  constructor() {}

  show(
    message: string,
    type: 'success' | 'error' | 'info' = 'info',
    timeout = 5000
  ) {
    this.message = message;
    this.type = type;
    this.isShow = true;

    setTimeout(() => {
      this.isShow = false;
      this.message = '';
    }, timeout);
  }

  hide() {
    this.isShow = false;
  }
}
