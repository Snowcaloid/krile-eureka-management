import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-signup-details',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, MatSlideToggleModule,
    MatTabsModule
  ],
  templateUrl: './signup-details.component.html',
  styleUrl: './signup-details.component.css'
})
export class SignupDetailsComponent {
  current = {
    id: 1
  }
  raid_leaders = [{id: 1, name: "Val"}, {id: 2, name: "Kanna"}]
  parties = [1,2,3,4,5,6,7]
  event_categories = [
    {value: "BA", name: "BA Runs"},
    {value: "DRS", name: "DRS Runs"},
    {value: "CRIT", name: "Critatron Prime Runs"},
    {value: "SMTH", name: "Your mother"},
  ]
  channels = [{id: 1, name: "general"}, {id: 2, name: "recruitment"}]
  passcode_delays = [0,5,10,15,20,25,30,45,60]
}
