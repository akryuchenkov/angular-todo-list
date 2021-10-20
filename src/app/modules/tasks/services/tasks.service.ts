import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskId, TaskModel } from 'src/app/models/task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/tasks';

  getAll() {
    return this.http
      .get<Object[]>(`${this.baseUrl}/`)
      .pipe(map((tasks) => tasks.map((task) => TaskModel.fromDto(task))));
  }

  getByUser() {}

  add(task: TaskModel) {
    return this.http.post(`${this.baseUrl}/`, task);
  }

  update(task: TaskModel) {
    return this.http.put(`${this.baseUrl}/${task.id}`, task);
  }

  delete(id: TaskId) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
