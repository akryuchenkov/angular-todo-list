import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    // if (!this.authService.isAuth) {
    //   this.router.navigate(['auth', 'login']);
    // }
  }

  onOpenFileDialog() {
    document.getElementById('file-input')?.click();
  }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (!fileList.length) {
      return;
    }

    let file: File = fileList[0];

    let formData: FormData = new FormData();
    formData.append('file', file);

    axios
      .post(`http://localhost:3001`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  }
}
