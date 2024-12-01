import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { EventFormComponent } from "../events/event-form/event-form.component";
import { SignupTemplateFormComponent } from "../events/signup-template-form/signup-template-form.component";

@Component({
  selector: 'app-guild-raid-leader-form',
  imports: [MatGridList, MatGridTile, EventFormComponent, SignupTemplateFormComponent],
  templateUrl: './guild-raid-leader-form.component.html',
  styleUrl: './guild-raid-leader-form.component.css'
})
export class GuildRaidLeaderFormComponent {
}
