import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {ContactSearchService} from '../shared/contact-search.service';
import {ContactModel} from '../shared/contact';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class VCardSearchComponent implements OnInit {
  contacts: Observable<ContactModel[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactSearchService: ContactSearchService,
              private router: Router) {
  }

  // Push a searchByName term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    //noinspection TypeScriptUnresolvedFunction
    this.contacts = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next searchByName term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http searchByName observable
        ? this.contactSearchService.searchByName(term)
        // or the observable of empty contacts if no searchByName term
        : Observable.of<ContactModel[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<ContactModel[]>([]);
      });
  }

  gotoDetail(contact: ContactModel): void {
    const link = ['dashboard/detail', contact.uid];
    this.router.navigate(link);
  }

  fullName(contact) {
    return [contact.firstName, contact.middleName, contact.lastName].join(' ');
  }

}
