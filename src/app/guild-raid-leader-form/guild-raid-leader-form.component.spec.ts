import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildRaidLeaderFormComponent } from './guild-raid-leader-form.component';

describe('GuildRaidLeaderFormComponent', () => {
  let component: GuildRaidLeaderFormComponent;
  let fixture: ComponentFixture<GuildRaidLeaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildRaidLeaderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildRaidLeaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
