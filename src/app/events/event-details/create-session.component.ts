import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from '../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400)
    ]);

    const { name, presenter, duration, level, abstract } = this;
    this.newSessionForm = new FormGroup({
      name,
      presenter,
      duration,
      level,
      abstract
    });
  }

  saveSession(formValues) {
    const { name, presenter, level, abstract } = formValues;
    const session: ISession = {
      id: undefined,
      name,
      presenter,
      duration: Number(formValues.duration),
      level,
      abstract,
      voters: []
    };

    console.log(session);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
