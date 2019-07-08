import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
