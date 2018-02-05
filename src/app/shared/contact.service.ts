import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ContactModel, NewContact} from './contact';
import {ApiConfiguration} from './api-configuration.service';

@Injectable()
export class ContactService {

  private formHeaders = new Headers({'Content-Type': 'application/www-form-url-encoded'});

  // private jsonHeaders = new Headers({ 'Content-Type': 'application/json' });

  private static handleError(error: any): Promise<any> {
    console.error('CONTACTS APP ERROR: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http, private config: ApiConfiguration) {
  }

  getContacts(): Promise<ContactModel[]> {
    const url = this.config.ServerWithApiUrl + '/contacts';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ContactModel[])
      .catch(ContactService.handleError);
  }

  getContact(id: string): Promise<ContactModel> {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.uid === id));
  }

  getContactLogin(name: string, mobile: string): Promise<ContactModel> {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.firstName === name && contact.mobile === mobile));
  }

  getContactName(lastName: string): Promise<ContactModel> {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.lastName === lastName));
  }

  getContactPhone(mobile: string): Promise<ContactModel> {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.mobile === mobile));
  }

  remove(id: string): Promise<void> {
    const url = this.config.ServerWithApiUrl + '/contacts/id/' + id;
    return this.http.delete(url, {headers: this.formHeaders})
      .toPromise()
      .then(() => null)
      .catch(ContactService.handleError);
  }

  create(name: NewContact): Promise<ContactModel> {
    const url = this.config.ServerWithApiUrl + '/contacts';
    const contact = new ContactModel(name);
    return this.http
      .post(url, contact, {headers: this.formHeaders})
      .toPromise()
      .then(res => res.json().data)
      .catch(ContactService.handleError);
  }

  update(contact: ContactModel): Promise<ContactModel> {
    const url = this.config.ServerWithApiUrl + '/contacts/id/' + contact.uid;
    return this.http
      .put(url, contact, {headers: this.formHeaders})
      .toPromise()
      .then(() => contact)
      .catch(ContactService.handleError);
  }

}
