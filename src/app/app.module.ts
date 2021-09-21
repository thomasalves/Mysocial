import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';


import { PostService } from './Components/posts/posts.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PostsComponent } from './Components/posts/posts.component';
import { AlbumComponent } from './Components/album/album.component';
import { PhotosComponent } from './Components/photo/photos.component';
import { AlbumPhotosComponent } from './views/album-photos/album-photos.component';
import { HomeComponent } from './views/home/home.component';
import { ToDoComponent } from './views/to-do/to-do.component';
import { ToDoListComponent } from './Components/to-do-list/toDoList.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostsComponent,
    AlbumComponent,
    PhotosComponent,
    AlbumPhotosComponent,
    HomeComponent,
    ToDoComponent,
    ToDoListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
