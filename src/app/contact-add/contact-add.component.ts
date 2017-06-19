import { Component, OnInit } from '@angular/core';
import {NewContact} from '../shared/contact';
import {ContactService} from '../shared/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vcard-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
  }

  add( firstName: string, lastName: string ): void {
    const vc = new NewContact();
    vc.firstName = lastName.trim();
    vc.lastName = firstName.trim();
    if (!firstName || !lastName) {
      return;
    }
    this.contactService.create(vc)
      .then(contact => {
        this.router.navigate(['dashboard/edit', contact._id]);
      });
  }
}
