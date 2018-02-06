import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new User('', '', '');

  constructor(private mediaService: MediaService, private router: Router) {
  }

  login() {
    this.mediaService.login(this.user);
  }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData(localStorage.getItem('token')).subscribe(response => {
        console.log(response);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

}
