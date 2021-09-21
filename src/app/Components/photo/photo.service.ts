import { Photos } from './photos.model';
import { Injectable } from '@angular/core';
// import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  read() {
    throw new Error('Method not implemented.');
  }
  baseUrlPhotos = "https://jsonplaceholder.typicode.com/photos";

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

  readPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.baseUrlPhotos)
  }
}
