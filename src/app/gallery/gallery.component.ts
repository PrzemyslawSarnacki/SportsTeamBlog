import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './post';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  
  displayedColumns: string[] = ['postTitle', 'postDesc'];
  data: Post[] = [];
  isLoadingResults = true;

  constructor(private api: PostService) { }

  ngOnInit(): void {
    this.api.getPosts()
    .subscribe((res: any) => {
      this.data = res;
      console.log("ok data",this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
