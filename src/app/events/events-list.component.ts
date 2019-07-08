import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
          <app-event-thumbnail [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EventsListComponent implements OnInit {

  title = 'Upcoming Angular Events';
  events: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
