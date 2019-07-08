import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  template: `
    <div>
      <h1>{{ title }}</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
          <app-event-thumbnail [event]="event" (click)="handleThumbNailClick(event.name)"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EventsListComponent implements OnInit {

  title = 'Upcoming Angular Events';
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbNailClick(eventName) {
    this.toastr.success(eventName);
  }
}
