import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/shared/services/alert/alert.service';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLogin() {
    this.userService
      .getByLogin(this.loginForm.get('login')?.value)
      .subscribe((user) => {
        if (!user) {
          this.alertService.show('Такого пользователя нет!', 'error');
          return;
        }
        if (this.loginForm.get('password')?.value !== user.password) {
          this.alertService.show('Неверный пароль!', 'error');
          return;
        }

        this.authService.signIn(user);
        this.router.navigate(['']);
      });
  }

  ngOnInit(): void {}
}
