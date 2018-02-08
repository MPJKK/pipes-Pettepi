import {OnInit} from '@angular/core';
import {Media} from '../models/media';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  file = new Media('', '');
  formData = new FormData();

  constructor(private mediaService, private router: Router) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    const file: File = evt.target.files[0];

    this.formData.append('file', file);
    // lisää tiedosto FormData-objektiin
  }

  uploadFile() {
    this.formData.append('title', this.file.title);
    this.formData.append('description', this.file.description);
    this.mediaService.uploadMedia(localStorage.getItem('token'), this.formData).
        subscribe(response => {
          console.log(response);
          setTimeout(() => {
            this.router.navigate(['front']);
          }, 1000);
        }, (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

  // lisää tekkstikenttien sisältö formData-objektiin
  // lähetä tiedot

  ngOnInit() {
  }

}
