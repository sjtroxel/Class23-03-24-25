import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-form',
  // imports: [FormsModule],
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskService = inject(TaskService)
  tasks = this.taskService.tasks
  // signal for a taskTitle
  newTaskTitle = signal<string>('');
  // addTask method
  taskPriority = signal<string>('');
  addTaskHandler(taskName: string, taskPriority: string) {
    if (this.newTaskTitle()) {
    }
    this.taskService.addTask(taskName, taskPriority)
    this.newTaskTitle.set('');
    this.taskPriority.set('');
  }
}
