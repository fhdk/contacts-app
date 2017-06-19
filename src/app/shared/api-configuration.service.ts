import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfiguration {
  // change to https and serve the api secure
  public Server = 'http://127.0.0.1:8080';
  public ApiUrl = '/api';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
