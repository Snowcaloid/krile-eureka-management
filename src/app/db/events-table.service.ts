import { Injectable } from '@angular/core';
import { createDB, createTable } from "blinkdb"

interface EventsTable {
  id: number;
  guild_id: number;
  event_type: string;
  timestamp: Date;
  description: string;
  raid_leader: number;
  pl1: number;
  pl2: number;
  pl3: number;
  pl4: number;
  pl5: number;
  pl6: number;
  pls: number;
  use_support: boolean;
  pass_main: number;
  pass_supp: number;
  pl_post_id: number;
  finished: boolean;
  canceled: boolean;
  signup_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventsTableService {
  db = createDB()
  table = createTable<EventsTable>(this.db, "events")
}
