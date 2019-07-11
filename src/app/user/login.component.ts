import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  login(formValues) {
    console.log('login');
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }


  ngOnInit() {
  }

}
