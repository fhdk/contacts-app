/**
 * Created by fh on 20-11-16.
 * Copyright (c) Frede Hundewadt
 * FCS-consult
 */
export class ContactModel {
  _id: string;
  __v: number;
  uid: string;
  revision: string;
  family: string;
  lastName: string;
  firstName: string;
  middleName: string;
  street: string;
  number: string;
  apartment: string;
  postCode: string;
  postOffice: string;
  phone: string;
  mobile: string;
  work: string;
  email: string;

  constructor(c: NewContact) {
    this._id = c._id || '';
    this.__v = c.__v || 0;
    this.uid = c.uid  || '';
    this.revision = c.revision || '';
    this.family = c.family || '';
    this.lastName = c.lastName;
    this.firstName = c.firstName;
    this.middleName = c.middleName || '';
    this.street = c.street || '';
    this.number = c.number || '';
    this.apartment = c.apartment || '';
    this.postCode = c.postCode || '';
    this.postOffice = c.postOffice || '';
    this.phone = c.phone || '';
    this.mobile = c.mobile || '';
    this.work = c.work || '';
    this.email = c.email || '';
  }
}

export class NewContact {
  _id?: string;
  __v?: number;
  uid?: string;
  revision?: string;
  family?: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  street?: string;
  number?: string;
  apartment?: string;
  postCode?: string;
  postOffice?: string;
  phone?: string;
  mobile?: string;
  work?: string;
  email?: string;
}
