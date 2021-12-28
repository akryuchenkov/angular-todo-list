import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: UserModel | null = null;

  constructor() {
    try {
      this.currentUser = UserModel.of(
        JSON.parse(localStorage.getItem('user') ?? '')
      );
    } catch (error) {
      console.error(error);
      this.currentUser = null;
    }
  }

  public get isAuth() {
    return this.currentUser != null;
  }

  signIn(user: UserModel) {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(this.currentUser.JSON()));
  }

  signOut() {
    localStorage.removeItem('user');
    this.currentUser = null;
  }
}
