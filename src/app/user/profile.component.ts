import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const firstName: FormControl = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    const lastName: FormControl = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  validInput(input) {
    return input.valid || input.untouched;
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
