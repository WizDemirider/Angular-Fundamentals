import { Injectable } from '@angular/core'

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS
    }

    getEvent(id:Number) {
        return EVENTS.find(event => event.id === id)
    }
}

const EVENTS = [{
    id: 1,
    name: 'Hour of Code',
    organiser: 'DJ-ACM',
    date: '14/12/2019',
    time: '2:00PM',
    price: 0,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
        address: "CNMS, Vile Parle (W)",
        city: "Mumbai"
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
    college_location: {
        room: 'C3',
        department: 'Computer Engineering',
    }
}
]