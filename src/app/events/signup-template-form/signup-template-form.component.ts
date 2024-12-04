import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SignupDetailsComponent } from "../signup-details/signup-details.component";
import { SignupSlotsFormComponent } from "../signup-slots-form/signup-slots-form.component";

@Component({
  selector: 'app-signup-template-form',
  imports: [MatCardModule, MatTableModule, SignupDetailsComponent, SignupSlotsFormComponent],
  templateUrl: './signup-template-form.component.html',
  styleUrl: './signup-template-form.component.css'
})
export class SignupTemplateFormComponent {
  dataSource = [
    {
      id: 1,
      name: 'Bestest signup ever',
      event_category: 'BA',
      description: 'its a BA',
      owner: 'Val',
      use_support: true
    },
  ];
  dataSourceSlots = [
    {
      id: 1,
      name: 'Tank',
      party: 1,
      slot: 1
    }
  ]
  displayedColumns: string[] = [
    'id',
    'name',
    'owner',
    'event_category'
  ];
  displayedSlotsColumns: string[] = [
    'slotID',
    'slotName',
    'slotParty',
    'slotSlot'
  ];
}
