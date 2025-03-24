import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
  declarations: [TaskComponent, TaskFormComponent, TaskListComponent, DashboardComponent, AppComponent],
  bootstrap: [AppComponent],
  imports: [FormsModule, BrowserModule ],
  exports: [TaskComponent, TaskFormComponent, TaskListComponent, DashboardComponent, AppComponent],
})
export class SharedModule {}
