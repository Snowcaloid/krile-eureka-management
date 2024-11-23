import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Guild } from '../guild';

interface Member {
  name: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-guild-tab-control',
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule
  ],
  templateUrl: './guild-tab-control.component.html',
  styleUrls: ['./guild-tab-control.component.css']
})
export class GuildTabControlComponent {
  @Input() guilds: Guild[] = [];

  // Static role options (could be dynamic if necessary)
  developerRoles = ['Developer', 'Lead Developer', 'Junior Developer', 'Senior Developer'];
  adminRoles = ['Admin', 'Super Admin', 'Moderator'];
  // Demo data for the table
  demoData: Member[] = [
    { name: 'Alice', role: 'Developer', status: 'Active' },
    { name: 'Bob', role: 'Admin', status: 'Inactive' },
    { name: 'Charlie', role: 'Moderator', status: 'Active' }
  ];
  displayedColumns: string[] = ['name', 'role', 'status'];
  roles = ['Member', 'Admin', 'Moderator'];
  statuses = ['Active', 'Inactive', 'Banned'];
}
