import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task = TaskModel.empty();

  @Output()
  toggleIsFinishedEvent = new EventEmitter<TaskModel>();

  constructor() {}

  ngOnInit(): void {}

  onChangeIsFinished(e: any) {
    this.toggleIsFinishedEvent.emit(this.task);
  }
}
