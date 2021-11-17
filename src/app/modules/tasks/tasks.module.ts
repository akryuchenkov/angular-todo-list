import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListPageComponent } from './pages/tasks-list-page/tasks-list-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksListPageComponent,
    TasksListComponent,
    TaskPageComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    TasksRoutingModule,
    SharedModule,
  ],
})
export class TasksModule {}
