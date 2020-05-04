import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .event-image {max-height: 100px; max-width: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {

  College_event:IEvent
  addMode:boolean=false

  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
        this.College_event = data['event'];
        this.addMode = false;
      })
  }

  addSession() {
    this.addMode=true
  }

  saveNewSession(session:ISession) {
    session.id = Math.max.apply(null, this.College_event.sessions.map(s => s.id)) + 1
    this.College_event.sessions.push(session)
    this.eventService.saveEvent(this.College_event).subscribe()
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode=false
  }
}
