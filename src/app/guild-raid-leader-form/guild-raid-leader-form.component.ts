import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardTitle, MatCardHeader } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-guild-raid-leader-form',
  imports: [MatGridList, MatGridTile, MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatTableModule,
    MatFormField, MatLabel, MatSelectModule
  ],
  templateUrl: './guild-raid-leader-form.component.html',
  styleUrl: './guild-raid-leader-form.component.css'
})
export class GuildRaidLeaderFormComponent {
  fields = [
    {
      name: "id",
      label: "ID",
      editable: false
    },
    {
      name: "event_type",
      label: "Event Type",
      editable: true
    },
    {
      name: "timestamp",
      label: "Timestamp",
      editable: true
    },
    {
      name: "description",
      label: "Description",
      editable: true
    },
    {
      name: "rl",
      label: "Raid Leader",
      editable: true
    },
    {
      name: "use_support",
      label: "Support?",
      editable: true
    },
    {
      name: "signup_id",
      label: "Signup ID",
      editable: true
    }
  ]
  editableFields = this.fields.filter(field => field.editable)

  displayedColumns: string[] = ["id", "event_type", "timestamp", "description", "rl", "use_support", "signup_id"]
  dataSource = [{
    "id": 1,
    "event_type": "BA",
    "timestamp": new Date(),
    "description": "its a BA",
    "rl": "Val",
    "use_support": true,
    "signup_id": 4
  }]
  current = {
    "id": 1,
    "event_type": "BA",
    "timestamp": new Date(),
    "description": "its a BA",
    "rl": "Val",
    "use_support": true,
    "signup_id": 4
  }
  event_types = ["BA", "BA Special", "BA Reclear", "DRS", "Criterion"]
}
