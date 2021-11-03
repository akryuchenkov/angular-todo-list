import { UserId } from './user.model';

export type TaskId = number;

export class TaskModel {
  constructor(
    public text: string,
    public description: string,
    public date: number,
    public isFinished: boolean,
    public user: UserId,
    public group: number,
    public id?: TaskId
  ) {}

  static fromDto(obj: any) {
    return new TaskModel(
      obj.text,
      obj.description,
      obj.date,
      obj.isFinished,
      obj.user,
      obj.group,
      obj.id
    );
  }

  static copy(task: TaskModel) {
    return new TaskModel(
      task.text,
      task.description,
      task.date,
      task.isFinished,
      task.user,
      task.group,
      task.id
    );
  }

  static empty() {
    return new TaskModel('', '', 0, false, -1, -1, -1);
  }
}
