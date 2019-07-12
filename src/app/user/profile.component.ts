import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const firstName: FormControl = new FormControl(
      this.authService.currentUser.firstName
    );
    const lastName: FormControl = new FormControl(
      this.authService.currentUser.lastName
    );

    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues);
    this.router.navigate(['events']);
  }

  cancel(msg) {
    console.log(msg);
    this.router.navigate(['events']);
  }
}
