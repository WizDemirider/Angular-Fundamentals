import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .event-image {max-height: 100px; max-width: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {

  College_event:IEvent

  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.College_event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
