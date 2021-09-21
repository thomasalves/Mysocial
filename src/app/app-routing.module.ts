import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ToDoComponent } from './views/to-do/to-do.component';
import { AlbumPhotosComponent } from './views/album-photos/album-photos.component';
import { AlbumComponent } from './Components/album/album.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "photos/:id",
    component: AlbumPhotosComponent
  },
  {
    path: 'to-do',
    component: ToDoComponent
  } ,
  {
    path: 'album',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
