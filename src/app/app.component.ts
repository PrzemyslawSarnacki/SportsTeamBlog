import { Component, OnInit } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import { PostService } from './post.service';;
import * as AOS from 'aos';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SportsTeamBlog';
  posts: Post[] = [];
  
  constructor(private api: PostService) { }

  ngOnInit(){
    AOS.init();
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = res;
        console.log(this.posts);
      }, err => {
        console.log(err);
      });
   }
      
}
