import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IEvent, ISession } from './event.model';

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

    updateEvent(event) {
        let index = EVENTS.findIndex(x => x.id == event.id)
        EVENTS[index] = event
    }

    searchSessions(searchTerm: string) {
        var term = searchTerm.toLocaleLowerCase()
        var results: ISession[] = [];

        EVENTS.forEach(event => {
            var matchingSessions = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1);
            matchingSessions = matchingSessions.map((session:any) => {
                session.eventId = event.id;
                return session;
            })
            results = results.concat(matchingSessions);
        })

        var emitter = new EventEmitter();
        setTimeout(() => {
            emitter.emit(results);
        }, 100);
        return emitter;
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
    sessions: [{
        id: 1,
        name: "Day 1",
        presenter: "Ankit",
        duration: 3
    }]
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