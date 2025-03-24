// app.component.ts
import { Component, signal } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
  // imports: [TaskListComponent, TaskFormComponent, DashboardComponent]
})
export class AppComponent {
  title = signal('Task Manager App');
}
