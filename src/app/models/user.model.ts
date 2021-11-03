export type UserId = number;

export class UserModel {
  constructor(
    public login: string,
    public password: string,
    public id?: UserId
  ) {}

  static fromDto(obj: any) {
    return new UserModel(obj.login ?? '', obj.password ?? '', obj.id);
  }

  copy() {
    return new UserModel(this.login, this.password);
  }

  static empty() {
    return new UserModel('', '');
  }
}
