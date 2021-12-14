import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/task.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
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
          -1
        )
      )
      .subscribe(() => {
        this.alertService.show('Запить добавлена!', 'error');
        this.fetch();
      });
    this.taskText.setValue('');
  }

  toggleIsFinished(task: TaskModel) {
    const tempTask = TaskModel.copy(task);
    tempTask.isFinished = !tempTask.isFinished;

    this.tasksService.update(tempTask).subscribe(() => this.fetch());
  }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    console.log(
      '🚀 ~ file: tasks-list-page.component.ts ~ line 69 ~ TasksListPageComponent ~ fileChange ~ fileList',
      fileList
    );
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      this.http
        .post(`http://localhost:3001`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        })
        .subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
    }
  }
}
