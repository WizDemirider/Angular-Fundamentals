import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
    selector: 'simple-modal',
    template:`
    <div id="{{elementId}}" #modalcontainer class="modal" tabindex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">{{title}}
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{tile}}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
        </div>
    </div>
    </div>
    </div>
    `,
    styles: [
        '.modal-body { height: 250px; overflow-y: scroll; }'
    ]
})

export class SimpleModalComponent {
    @Input() title:string
    @Input() elementId:string
    @Input() closeOnBodyClick:string
    @ViewChild('modalcontainer') containerEl: ElementRef

    constructor(@Inject(JQ_TOKEN) private $:any) {

    }

    closeModal() {
        if(this.closeOnBodyClick.toLocaleLowerCase() == "true")
            this.$(this.containerEl.nativeElement).modal('hide');
    }
}