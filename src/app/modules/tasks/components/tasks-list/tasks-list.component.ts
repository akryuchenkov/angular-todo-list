import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  tasks: TaskModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsFinished(index: number) {
    this.tasks[index].isFinished = !this.tasks[index].isFinished;
  }
}
