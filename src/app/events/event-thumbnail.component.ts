import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div>
      <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div>Time: {{ event?.time }}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          <span>Online URL: {{ event?.onlineUrl }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        padding-left: 10px;
      }

      .well div {
        color: #bbb;
      }

      .thumbnail {
        min-height: 210px;
      }

      .green {
        color: #00aa00 !important;
      }

      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
    }
    return '';
  }
}
