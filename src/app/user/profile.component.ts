import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

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
    this.toastr.success('Profile Saved');
  }

  cancel(msg) {
    console.log(msg);
    this.router.navigate(['events']);
  }
}
