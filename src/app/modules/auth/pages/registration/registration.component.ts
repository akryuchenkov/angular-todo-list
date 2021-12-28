import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { AlertService } from 'src/app/modules/shared/services/alert/alert.service';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegistration() {
    this.userService
      .getByLogin(this.registrationForm.get('login')?.value)
      .pipe(
        tap((user) => {
          if (user) {
            throw new Error('Логин занят');
          }
          return user;
        }),
        switchMap(() =>
          this.userService.add(UserModel.of(this.registrationForm.value))
        )
      )
      .subscribe({
        next: (user) => {
          this.authService.signIn(user);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log(error);
          this.alertService.show(error, 'error');
        },
      });
  }
}
