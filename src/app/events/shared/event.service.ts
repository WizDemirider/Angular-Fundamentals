import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IEvent } from './event.model';

@Injectable()
export class EventService {
    getEvents():Observable<IEvent[]> {
        let subject = new Subject<IEvent[]>()
        setTimeout(() => {subject.next(EVENTS); subject.complete(); }, 100)
        return subject
    }

    getEvent(id:Number) {
        return EVENTS.find(event => event.id === id)
    }

    saveEvent(event) {
        event.id = EVENTS.length
        event.session = []
        EVENTS.push(event)
    }
}

const EVENTS:IEvent[] = [{
    id: 1,
    name: 'Hour of Code',
    organiser: 'DJ-ACM',
    date: new Date('12/14/2019'),
    time: '2:00PM',
    price: 0,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
        address: "CNMS, Vile Parle (W)",
        city: "Mumbai"
    },
    sessions: []
},
{
    id: 2,
    name: 'Intro to Git',
    organiser: 'DJ-ACM',
    date: new Date('01/12/2020'),
    time: '2:00PM',
    price: 50,
    imageUrl: "/assets/images/angularconnect-shield.png",
    collegeLocation: {
        room: 'C3',
        department: 'Computer Engineering',
    },
    sessions: []
}
]