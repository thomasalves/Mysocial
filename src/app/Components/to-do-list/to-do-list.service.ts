import { toDo } from './to-do-list.model';
import { Injectable } from '@angular/core';
// import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class toDoService {
  read() {
    throw new Error('Method not implemented.');
  }
  baseUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  // showMessage(msg: string):void {
  //   this.snackBar.open(msg, 'X', {
  //     duration: 3000,
  //     horizontalPosition: "right",
  //     verticalPosition: "top"

  //   })
  // }

  // create(album: Albums): Observable<Albums> {

  //   return this.http.post<Albums>(this.baseUrl, album)
  // }

  readToDo(): Observable<toDo[]> {
    return this.http.get<toDo[]>(this.baseUrl)
  }
}
