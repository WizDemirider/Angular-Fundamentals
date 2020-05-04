import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit, OnChanges {
@Input() sessions:ISession[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(Array.isArray(this.sessions) && this.sessions.length>1)
    {
      this.sessions.sort((a,b)=>{return a.duration - b.duration})
    }
  }

}
