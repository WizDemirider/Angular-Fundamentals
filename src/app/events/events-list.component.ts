import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../global-common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
        <h1>Upcoming Events</h1>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-md-6" *ngFor="let event of events">
                <event-thumbnail [College_event]="event" (click)="handleEventClick(event)"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:any[]

    constructor(private eventService: EventService, private toastr:ToastrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleEventClick(event) {
        this.toastr.success(event.name)

    }

}