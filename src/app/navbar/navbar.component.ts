import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

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
  constructor(private auth:AuthService) {

  }

}
