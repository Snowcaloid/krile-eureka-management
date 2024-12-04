import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-slots-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule],
  templateUrl: './signup-slots-form.component.html',
  styleUrl: './signup-slots-form.component.css'
})
export class SignupSlotsFormComponent {
  current = {
    id: 1
  }
  parties = [1,2,3,4,5,6,"Support"]
  slots = [1,2,3,4,5,6,7,8]
}
