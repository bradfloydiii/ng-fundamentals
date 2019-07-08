import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div>
      <div class="well hoverwell thumbnail">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div>Time: {{ event?.time }}</div>
        <div [ngSwitch]="event?.time">
          <span *ngSwitchCase="'8:00 am'">Early Start</span>
          <span *ngSwitchCase="'10:00 am'">Late Start</span>
          <span *ngSwitchDefault>Normal Start</span>
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
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;
}
