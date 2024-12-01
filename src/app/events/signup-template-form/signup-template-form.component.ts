import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-signup-template-form',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './signup-template-form.component.html',
  styleUrl: './signup-template-form.component.css'
})
export class SignupTemplateFormComponent {
  dataSource = [
    {
      id: 1,
      event_type: 'BA',
      timestamp: new Date(),
      description: 'its a BA',
      rl: 'Val',
      use_support: true,
      signup_id: 4,
    },
  ];
  displayedColumns: string[] = [
    'id',
    'event_type',
    'timestamp',
    'description',
    'rl',
    'use_support',
    'signup_id',
  ];
}
