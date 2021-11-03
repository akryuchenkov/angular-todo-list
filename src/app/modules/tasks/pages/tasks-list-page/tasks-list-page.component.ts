import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/task.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TasksService } from '../../services/tasks.service';

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

  constructor(
    private tasksService: TasksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.tasksService
      .getByUser(this.authService.currentUser?.id ?? -1)
      .subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    this.tasksService
      .add(
        new TaskModel(
          this.taskText.value,
          '',
          new Date().getTime(),
          false,
          -1,
          -1
        )
      )
      .subscribe(() => this.fetch());
    this.taskText.setValue('');
  }

  toggleIsFinished(task: TaskModel) {
    const tempTask = TaskModel.copy(task);
    tempTask.isFinished = !tempTask.isFinished;

    this.tasksService.update(tempTask).subscribe(() => this.fetch());
  }
}
