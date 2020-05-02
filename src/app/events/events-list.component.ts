import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
        <h1>Upcoming Events</h1>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-md-6" *ngFor="let event of events">
                <event-thumbnail [College_event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {
    events = [{
        id: 1,
        name: 'ACM First Meet',
        organiser: 'DJ-ACM',
        date: '14/12/2019',
        time: '2:00PM',
        price: 0,
        imageUrl: "/assets/images/angularconnect-shield.png",
        location: {
            room: 'C1',
            department: 'Computer Engineering',
        }
    },
    {
        id: 2,
        name: 'Intro to Git',
        organiser: 'DJ-ACM',
        date: '12/01/2020',
        time: '2:00PM',
        price: 50,
        imageUrl: "/assets/images/angularconnect-shield.png",
        location: {
            room: 'C3',
            department: 'Computer Engineering',
        }
    }
    ]

}