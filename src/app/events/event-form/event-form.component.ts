import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { EventsTableService } from '../../db/events-table.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-event-form',
  imports: [
    MatCardModule,
    MatTableModule,
    MatFormField,
    MatLabel,
    MatSelectModule,
    CommonModule,
    MatDatepickerModule,
    MatTimepickerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventsTableService, provideNativeDateAdapter()],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css',
})
export class EventFormComponent {
  displayedColumns: string[] = [
    'id',
    'event_type',
    'timestamp',
    'description',
    'rl',
    'use_support',
    'signup_id',
  ];
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
  current = {
    id: 1,
    event_type: 'BA',
    timestamp: new Date(),
    description: 'its a BA',
    rl: 'Val',
    use_support: true,
    signup_id: 4,
  };
  event_types = ['BA', 'BA Special', 'BA Reclear', 'DRS', 'Criterion'];
  value = new Date();
  raid_leaders = [
    { id: 123, name: 'Val' },
    { id: 456, name: 'Ketnet' },
  ];
  signup_templates = [
    { id: 1, name: 'vals bestest signup' },
    { id: 2, name: 'embers worstest signup' },
  ];
  constructor() {}
}
