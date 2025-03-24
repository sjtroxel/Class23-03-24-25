// task-list.component.ts
import { Component, inject, signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskService } from '../shared/services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: false,
  // imports: [TaskComponent, FormsModule]
})
export class TaskListComponent {

taskService = inject(TaskService)
tasks = this.taskService.tasks

  filterStatus = signal('All');

  isEditing = false;
  editedTitle = signal<string>('');

  get filteredTasks() {
    if (this.filterStatus() === 'Completed') {
      return this.tasks().filter(task => task.completed);
    }
    if (this.filterStatus() === 'Pending') {
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks;
  }

  changeFilter(status: string) {
    this.filterStatus.set(status);
  }

  editHandler(title: string) {
    const taskToEdit = this.tasks().find(t => t.title === title);
    if (taskToEdit) {
      this.editedTitle.set(taskToEdit.title);
      this.isEditing = true;
    }
  }

  submitHandler(newTitle: string) {
    this.editedTitle.set('');
    this.isEditing = false;
  }
}
