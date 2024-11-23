import { Component } from '@angular/core';
import { GuildTabControlComponent } from './guild-tab-control/guild-tab-control.component';
import { Guild } from './guild';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GuildTabControlComponent],
  styleUrl: './app.component.css',
  template: `<app-guild-tab-control [guilds]="guilds"></app-guild-tab-control>`,
})
export class AppComponent {
  title = 'krile-eureka-management';

  guilds: Guild[] = [];

  ngOnInit() {
    this.guilds.push(new Guild('Guild 1', '1'));
    this.guilds.push(new Guild('Guild 2', '2'));
    this.guilds.push(new Guild('Guild 3', '3'));
  }
}
