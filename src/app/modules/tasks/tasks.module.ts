import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListPageComponent } from './pages/tasks-list-page/tasks-list-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    TasksListPageComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
