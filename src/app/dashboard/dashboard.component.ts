import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../shared/contact';
import {ContactService} from '../shared/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  contacts: ContactModel[] = [];

  constructor(private  contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }

}
