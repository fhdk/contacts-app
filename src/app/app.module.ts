import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import './shared/rxjs-extensions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VCardSearchComponent } from './contact-search/contact-search.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactSearchService } from './shared/contact-search.service';
import { ContactService } from './shared/contact.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { ApiConfiguration } from './shared/api-configuration.service';
import { Router } from '@angular/router';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    VCardSearchComponent,
    DashboardComponent,
    ContactAddComponent,
    ContactEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    ContactSearchService,
    ContactService,
    ApiConfiguration,
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
