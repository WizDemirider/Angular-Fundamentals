import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    template:`
    <div id="simple-modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">{{title}}
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{tile}}</h4>
        </div>
        <div class="modal-body">
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
}