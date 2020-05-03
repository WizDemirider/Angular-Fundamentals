import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../shared/event.model';
import { restrictedWords } from '../../shared/restricted-words.validator';

@Component({
  templateUrl: './create-session.component.html',
  styles: [`
  em { floar:right; color:#E05C65, padding-left: 10px;}
`]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required, restrictedWords(['-', ':'])])
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration
    })
  }

  saveSession(form) {
    let session:ISession = {
      id: undefined,
      name: form.name,
      duration: form.duration,
      presenter: form.presenter
    }
    console.log(session)
  }

}
