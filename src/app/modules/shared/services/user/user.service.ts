import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getByLogin(login: string): Observable<UserModel | null> {
    return this.httpClient
      .get<Object[]>(`http://localhost:3000/users?login=${login}`)
      .pipe(map((users) => (users.length ? UserModel.of(users[0]) : null)));
  }

  add(user: UserModel): Observable<UserModel> {
    return this.httpClient
      .post('http://localhost:3000/users', user.JSON())
      .pipe(map((user) => UserModel.of(user)));
  }
}
