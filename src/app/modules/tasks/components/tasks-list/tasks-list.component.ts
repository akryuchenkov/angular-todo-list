import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

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

  @Input()
  toggleIsFinished: (index: number) => void = () => {};

  constructor() {}

  ngOnInit(): void {}
}
