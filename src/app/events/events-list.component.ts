import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
        <h1>Upcoming Events</h1>
        <hr>
        <event-thumbnail (eventClick)="handleClick($event)" [College_event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    event1 = {
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
    }

    handleClick(e) {
        console.log("recvd:"+e)
    }
}