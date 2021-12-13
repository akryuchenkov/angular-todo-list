import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import axios from 'axios';
import { AlertService } from './modules/shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  public get alert() {
    return {
      isShow: this.alertService.isShow,
      type: this.alertService.type,
      message: this.alertService.message,
    };
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private http: HttpClient
  ) {
    if (!this.authService.isAuth) {
      this.router.navigate(['auth', 'login']);
    }
  }
}
