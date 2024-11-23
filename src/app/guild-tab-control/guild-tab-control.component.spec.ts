import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildTabControlComponent } from './guild-tab-control.component';

describe('GuildTabControlComponent', () => {
  let component: GuildTabControlComponent;
  let fixture: ComponentFixture<GuildTabControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildTabControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildTabControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
