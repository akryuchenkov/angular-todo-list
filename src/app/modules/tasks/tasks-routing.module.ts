import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListPageComponent } from './pages/tasks-list-page/tasks-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
