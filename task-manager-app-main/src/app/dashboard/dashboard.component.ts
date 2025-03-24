import { Component, input } from '@angular/core';
import { TaskFormComponent } from "../task-form/task-form.component";
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-dashboard',
  // imports: [TaskFormComponent, TaskListComponent],
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = input()
}
