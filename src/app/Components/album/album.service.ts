import { Albums } from './album..model';
import { Injectable } from '@angular/core';
// import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl = "https://jsonplaceholder.typicode.com/albums";

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

  read(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.baseUrl)
  }


}
