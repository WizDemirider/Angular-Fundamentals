import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent {
    @Input() College_event:any
    @Output() eventClick = new EventEmitter() //emit data when a javascript event occurs

    handleClick() {
        this.eventClick.emit(this.College_event.name)
    }
}