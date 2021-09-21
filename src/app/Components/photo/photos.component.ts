// import { Photos } from './../photos/photos.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from './photo.service';
import { Photos } from './photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  Photos: Photos[] = []
  public userId!: string;


  constructor( private photosService: PhotoService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params['id']);
  }


  ngOnInit(): void {

    console.log(this.userId)
      this.photosService.readPhotos().subscribe((Photos: any) => {
      for(let photo  of Photos){
        var id = parseInt(this.userId);
        if(id === photo.albumId){
          console.log(photo.url, photo.albumId)
          this.Photos.push(photo)
          console.log(photo)
        }
      }
      console.log(this.Photos)
    })

  }

}
