import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from 'src/app/models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  task: TaskModel = TaskModel.empty();

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tasksService
        .getById(params.id)
        .subscribe((task) => (this.task = task));
    });
  }
}
