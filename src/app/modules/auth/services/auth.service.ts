import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: UserModel | null = null;

  constructor(private http: HttpClient) {}

  public get isAuth() {
    return this._currentUser != null;
  }

  public get currentUser() {
    return this._currentUser;
  }

  login(user: UserModel, callback?: () => void) {
    this.http
      .get<Object[]>(
        `http://localhost:3000/users?login=${user.login}&password=${user.password}`
      )
      .pipe(map((users) => (users[0] ? UserModel.fromDto(users[0]) : null)))
      .subscribe((currentUser) => {
        this._currentUser = currentUser;
        callback?.();
      });
  }
}
