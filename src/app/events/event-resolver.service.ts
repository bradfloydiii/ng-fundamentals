import { Injectable } from '@angular/core';
import { EventService } from './shared';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params.id);
  }
}
