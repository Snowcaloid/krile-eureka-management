import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup-slots-form',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './signup-slots-form.component.html',
  styleUrl: './signup-slots-form.component.css'
})
export class SignupSlotsFormComponent {
  current = {
    id: 1
  }
}
