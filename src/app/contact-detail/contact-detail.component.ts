import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {ContactModel} from '../shared/contact';
import {ContactService} from '../shared/contact.service';
import {getFile} from 'ts-node/dist';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: ContactModel;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(params['id']))
      .subscribe(contact => {
        this.contact = contact;
      });
  }

  streetAddress(contact) {
    return [contact.street, contact.number, contact.apartment].join(' ');
  }

  postalAddress(contact) {
    return [contact.postCode, contact.postOffice].join(' ');
  }

  fullName(contact) {
    return [contact.firstName, contact.middleName, contact.lastName].join(' ');
  }

  goEdit(): void {
    this.router.navigate(['dashboard/edit', this.contact._id]);
  }

  // goBack(): void {
  //   this.location.back();
  // }

  goHome(): void {
    this.router.navigate(['dashboard']);
  }
}
