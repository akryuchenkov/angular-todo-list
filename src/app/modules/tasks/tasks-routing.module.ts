import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TasksListPageComponent } from './pages/tasks-list-page/tasks-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListPageComponent,
  },
  {
    path: ':id',
    component: TaskPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
