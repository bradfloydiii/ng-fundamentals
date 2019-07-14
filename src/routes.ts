import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  EventsListResolverService,
  EventRouteActivatorService
} from './app/events/index';

import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
