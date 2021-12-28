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
    public startDate: number,
    public endDate: number,
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
      obj.startDate,
      obj.endDate,
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
      task.startDate,
      task.endDate,
      task.id
    );
  }

  static empty() {
    return new TaskModel(
      '',
      '',
      0,
      false,
      -1,
      -1,
      new Date().getTime(),
      new Date().getTime(),
      -1
    );
  }
}
