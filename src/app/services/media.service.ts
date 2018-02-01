import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {error} from 'selenium-webdriver';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  login(user) {
    this.http.post(this.apiUrl + '/login', user).subscribe(response => {
       // homma ok -> fronttiin
    }, (error: HttpErrorResponse) => {
       // homma kusee -> loginiin
    });
  }
}
