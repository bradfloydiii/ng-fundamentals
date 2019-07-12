import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _currentUser: IUser;

  set currentUser(value) {
    this._currentUser = value;
  }

  get currentUser(): IUser {
    return this._currentUser;
  }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Aloysius',
      lastName: 'Reginald IV'
    };
  }

  isAuthenticated() {
    return this._currentUser;
  }

  updateCurrentUser(formValues) {
    const { firstName, lastName } = formValues;
    Object.assign(this.currentUser, {
      firstName,
      lastName
    });
  }
}
