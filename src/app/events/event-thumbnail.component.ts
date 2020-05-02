import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .pad-left { padding-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail {min-height: 25vh; }
    `]
})

export class EventThumbnailComponent {
    @Input() College_event:any

}