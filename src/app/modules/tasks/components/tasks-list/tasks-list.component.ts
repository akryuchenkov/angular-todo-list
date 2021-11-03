import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskId, TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  tasks: TaskModel[] = [];

  @Output()
  toggleIsFinishedEvent = new EventEmitter<TaskModel>();

  toggleIsFinished(task: TaskModel) {
    this.toggleIsFinishedEvent.emit(task);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toTask(id: TaskId) {
    this.router.navigate(['/', id]);
  }
}
