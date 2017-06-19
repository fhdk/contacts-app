import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ContactService} from '../shared/contact.service';
import '../shared/rxjs-extensions';
import {ContactModel} from '../shared/contact';

@Injectable()
export class AuthService {

  // public properties
  public redirectUrl: string;
  public isAuthenticated: boolean;

  constructor(private vcardService: ContactService) {
  }

  login(name, phone): Observable<boolean> {
    return Observable.of(true).do(() => {
      return this.vcardService.getContactLogin(name, phone)
        .then(data => data as ContactModel)
        .then(vcard => {
          if (vcard) {
            // console.log(JSON.stringify(contact));
            this.isAuthenticated = true;
          }
        });
    }).delay(1000);
  }

  logout() {
    this.isAuthenticated = false;
  }
}
