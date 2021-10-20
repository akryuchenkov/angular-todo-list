import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task = TaskModel.empty();

  @Input()
  toggleIsFinished: (id: number, isFinished: boolean) => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  onChangeIsFinished(e: any) {
    this.toggleIsFinished(this.task.id || -1, e.target.checked);
  }
}
