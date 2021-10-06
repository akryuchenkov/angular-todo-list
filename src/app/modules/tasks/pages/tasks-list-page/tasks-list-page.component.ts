import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.scss'],
})
export class TasksListPageComponent implements OnInit {
  tasks: TaskModel[] = [
    new TaskModel('Провести занятие', '', new Date().getTime(), false, -1, -1),
    new TaskModel('Вынести мусор', '', new Date().getTime(), false, -1, -1),
  ];

  taskText = new FormControl('', [Validators.required]);

  public get newTasks(): TaskModel[] {
    return this.tasks.filter((task) => !task.isFinished);
  }

  public get completedTasks(): TaskModel[] {
    return this.tasks.filter((task) => task.isFinished);
  }

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    this.tasks.push(
      new TaskModel(
        this.taskText.value,
        '',
        new Date().getTime(),
        false,
        -1,
        -1
      )
    );
    this.taskText.setValue('');
  }

  toggleIsFinished(index: number) {
    this.tasks[index].isFinished = !this.tasks[index].isFinished;
  }
}
