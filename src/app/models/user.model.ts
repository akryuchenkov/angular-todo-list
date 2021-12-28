export type UserId = number;

export class UserModel {
  constructor(
    private _login: string,
    private _password: string,
    private _id?: UserId
  ) {}

  public get login() {
    return this._login;
  }
  public get password() {
    return this._password;
  }
  public get id() {
    return this._id;
  }

  static of(obj: any) {
    return new UserModel(obj.login ?? '', obj.password ?? '', obj.id);
  }
  static fromDto(obj: any) {
    return new UserModel(obj.login ?? '', obj.password ?? '', obj.id);
  }

  copy() {
    return new UserModel(this.login, this.password);
  }

  JSON() {
    return {
      login: this.login,
      password: this.password,
      id: this.id,
    };
  }

  static empty() {
    return new UserModel('', '');
  }
}
