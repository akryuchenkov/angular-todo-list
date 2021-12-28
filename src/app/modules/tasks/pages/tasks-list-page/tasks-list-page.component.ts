import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/task.model';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { AlertService } from 'src/app/modules/shared/services/alert/alert.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.scss'],
})
export class TasksListPageComponent implements OnInit {
  tasks: TaskModel[] = [];

  taskText = new FormControl('', [Validators.required]);

  public get newTasks(): TaskModel[] {
    return this.tasks.filter((task) => !task.isFinished);
  }

  public get completedTasks(): TaskModel[] {
    return this.tasks.filter((task) => task.isFinished);
  }

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
    private http: HttpClient,
    private alertService: AlertService
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
          this.authService.currentUser?.id ?? -1,
          new Date().getTime(),
          new Date().getTime(),
          -1
        )
      )
      .subscribe(() => {
        this.alertService.show('Запить добавлена!', 'success');
        this.fetch();
      });
    this.taskText.setValue('');
  }

  toggleIsFinished(task: TaskModel) {
    const tempTask = TaskModel.copy(task);
    tempTask.isFinished = !tempTask.isFinished;
    tempTask.endDate = new Date().getTime();

    this.tasksService.update(tempTask).subscribe(() => this.fetch());
  }
}
