import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isAuth) {
      this.router.navigate(['auth', 'login']);
    }
  }
}
