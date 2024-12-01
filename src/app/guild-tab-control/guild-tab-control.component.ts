import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Guild } from '../guild';
import { GuildRaidLeaderFormComponent } from "../guild-raid-leader-form/guild-raid-leader-form.component";


@Component({
  selector: 'app-guild-tab-control',
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    GuildRaidLeaderFormComponent
],
  templateUrl: './guild-tab-control.component.html',
  styleUrls: ['./guild-tab-control.component.css']
})
export class GuildTabControlComponent {
  @Input() guilds: Guild[] = [];
}
