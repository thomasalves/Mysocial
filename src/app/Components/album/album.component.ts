import { Albums } from './album..model';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Router } from '@angular/router';
// import { relative } from 'path';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  [x: string]: any;

  Albums: Albums[] = [];
  // displayedColumns  = ['Body', 'Title'];

  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {

    this.albumService.read().subscribe(Albuns => {
      this.Albums= Albuns
      // console.log(Albuns)
    })

  }

  Listalbum(id: number): void {
    // console.log(id)
    this.router.navigate(['/photos', id],  { relativeTo: this.route })
  }
}
