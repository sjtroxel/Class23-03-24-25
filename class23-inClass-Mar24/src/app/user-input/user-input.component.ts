import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 nameInput = ''
 favColorInput = ''
 name = ''
 favColor = ''

  onSubmit() {
    this.name = this.nameInput
    this.favColor = this.favColorInput
console.log(`My name is ${this.name} and my fav color is ${this.favColor}`);
  }
}
