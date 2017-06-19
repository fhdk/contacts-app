import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {ContactModel} from './contact';
import {ContactService} from './contact.service';
import { ApiConfiguration } from './api-configuration.service';

@Injectable()
export class ContactSearchService {

  constructor( private http: Http, private config: ApiConfiguration ) {
  }

  searchByName(term: string): Observable<ContactModel[]> {
    console.log('searchByName: target = ' + this.config.ServerWithApiUrl + '/contacts/name/' + term);
    return this.http
      .get(this.config.ServerWithApiUrl + '/contacts/name/' + term)
      .map((r: Response) => r.json().data as ContactModel[]);
  }

  searchByPhone(term: string): Observable<ContactModel> {
    console.log('searchByPhone: target = ' + this.config.ServerWithApiUrl + '/contacts/phone/' + term);
    return this.http
      .get(this.config.ServerWithApiUrl + '/contacts/phone/' + term)
      .map((r: Response) => r.json().data as ContactModel);
  }

}
