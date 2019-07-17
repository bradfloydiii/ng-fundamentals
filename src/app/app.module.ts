import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  EventsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  EventsListResolverService,
  EventResolverService,
  VoterService,
} from './events/index';

import {
  CollapsibleWellComponent,
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './errors/404.component';
import { appRoutes } from 'src/routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateSessionComponent } from './events/event-details/create-session.component';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    EventResolverService,
    // long hand syntax
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    // long hand syntax with a useClass
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventsListResolverService,
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
