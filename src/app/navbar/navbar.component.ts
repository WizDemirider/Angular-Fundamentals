import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { TOASTR_TOKEN, Toastr } from '../global-common';
import { Router } from '@angular/router';

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
  auth: AuthService

  constructor(private router:Router, auth:AuthService, private eventService:EventService, @Inject(TOASTR_TOKEN) private toastr:Toastr) {
    this.auth = auth
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.toastr.success("Logged out")
      this.router.navigate(['/user/login'])
    })
  }

}
