import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  ngOnInit() {}
}
