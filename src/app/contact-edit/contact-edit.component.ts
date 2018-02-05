import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {ContactModel} from '../shared/contact';
import {ContactService} from '../shared/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: ContactModel;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(params['id']))
      .subscribe(contact => this.contact = contact);
  }

  goSave(): void {
    this.contactService.update(this.contact)
      .then(() => this.router.navigate(['dashboard/detail', this.contact.uid]));
  }

  goHome(): void {
    this.router.navigate(['dashboard']);
  }

  goBack(): void {
    this.location.back();
  }
}
