import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
      .nav .navbar-nav {
        font-size: 15px;
      }

      #searchForm {
        margin-right: 100px;
      }

      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }

      li > a.active {
        color: #f97924;
      }
    `
  ]
})
export class NavComponent implements OnInit {

  isAuthenticated: any;

  constructor(private auth: AuthService) {
    console.log(`isAuthenticated: ${auth.isAuthenticated()}`);
  }

  ngOnInit() {}
}
