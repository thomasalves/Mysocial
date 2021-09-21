import { PostService } from './posts.service';
import { Posts } from './posts.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  newPost: Posts = {
    title: '',
    body: '',
    userId: 1,
    id: 1
  }


  Post: Posts[] = [];
  displayedColumns  = ['Body', 'Title'];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.read().subscribe(posts => {
      this.Post= posts
      // console.log(posts)
    })
  }

  createPost(): void {
    this.postService.create(this.newPost).subscribe(() => {
      this.postService.showMessage('Postagem adicionada')
      this.router.navigate(['/'])
      console.log(this.newPost)

    })

  }

}
