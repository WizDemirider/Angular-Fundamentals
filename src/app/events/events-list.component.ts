import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { isArray } from 'util';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
        <h1>Upcoming Events</h1>
        <hr>
        <div class="row" *ngIf="EventsIsArray()">
            <div class="col-xs-12 col-md-6" *ngFor="let event of events">
                <event-thumbnail [College_event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:IEvent[]

    constructor(private eventService: EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    EventsIsArray() {
        return isArray(this.events)
    }

}