import { Posts } from './posts.model';
import { Injectable } from '@angular/core';
// import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }

  create(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.baseUrl, post)
  }

  read(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl)
  }
}
