export type TaskId = number;

export class TaskModel {
  constructor(
    public text: string,
    public description: string,
    public date: number,
    public isFinished: boolean,
    public user: number,
    public group: number,
    public id?: TaskId
  ) {}
}