import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    li > a.active {color: #F97924;}
    @media(max-width: 480px) {#searchForm {display:none}}
  `]
})
export class NavbarComponent {
  searchTerm: string=""
  foundSessions: ISession[]

  constructor(private auth:AuthService, private eventService:EventService) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }

}
