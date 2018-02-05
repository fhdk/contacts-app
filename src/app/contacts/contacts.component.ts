import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ContactModel, NewContact} from '../shared/contact';
import {ContactService} from '../shared/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: ContactModel[];
  selectedContact: ContactModel;

  constructor(private contactService: ContactService,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  remove(contact: ContactModel): void {
    this.contactService
      .remove(contact._id)
      .then(() => {
        this.contacts = this.contacts.filter(h => h !== contact);
        if (this.selectedContact === contact) {
          this.selectedContact = null;
        }
      });
  }

  onSelect(contact: ContactModel): void {
    this.selectedContact = contact;
  }

  fullName(contact) {
    return [contact.firstName, contact.middleName, contact.lastName].join(' ');
  }

  gotoEdit(contact: ContactModel): void {
    this.router.navigate(['dashboard/edit', contact.uid]);
  }

  gotoDetail(contact: ContactModel): void {
    this.router.navigate(['dashboard/detail', contact.uid]);
  }
}
