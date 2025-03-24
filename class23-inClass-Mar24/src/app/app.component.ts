import { Component } from '@angular/core';

import { UserInputComponent } from './user-input/user-input.component';
import { SharedModule } from './shared.module';


@Component({
  selector: 'app-root',
  imports: [UserInputComponent, SharedModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class23PreClassMar24';
}
