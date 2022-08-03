import { PostService } from './../services/postService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  constructor(private PostService: PostService) { }
  allPosts: any = [];
  message = "post uploaded"

  ngOnInit(): void {
    this.allPosts = ["Aashi", "Megha", "Shivangi"]
    this.PostService.getValue().subscribe((value) => {
      if (value != '') {
        this.allPosts.push(value)
        console.log("post posted")
      }
    });
  }
}


