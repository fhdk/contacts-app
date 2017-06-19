import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Created by fh on 16-07-14.
 */
import { AuthService } from './auth.service';

class Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit, DoCheck {

  cred: Credentials = new Credentials;
  message: string;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngDoCheck() {
  }

  ngOnInit() {
    // this.setMessage();
  }

  setMessage() {
    // this.message = (this.authService.isAuthenticated ? 'ind' : 'ud');
  }

  login() {
    this.message = 'Prøver at logge ind ...';
    this.authService.login(this.cred.username, this.cred.password).subscribe(() => {
      if (this.authService.isAuthenticated) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([ redirect ]);
      }
      this.message = 'Desværre ...';
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
