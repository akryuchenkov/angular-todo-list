import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/shared/services/auth/auth.service';
import { AlertService } from './modules/shared/services/alert/alert.service';

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

  public get currentUser() {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
    if (!this.authService.isAuth) {
      this.router.navigate(['auth', 'login']);
    }
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['auth', 'login']);
  }
}
