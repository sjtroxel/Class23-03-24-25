import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>([
    { title: 'Task 1', completed: false, priority: 'high' },
    { title: 'Task 2', completed: true, priority: 'medium' },
    { title: 'Task 3', completed: false, priority: 'low' },
  ]);

  addTask(taskName: string, taskPriority: string) {
    this.tasks.update(t => [...t, {title: taskName, completed: false, priority: taskPriority}])
    // clear input after enter

  }

}
