import { HttpService } from './../services/http.service';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: string = ""
  user_id:string=""

  constructor(private postService: PostService, private httpService: HttpService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.user_id=localStorage.getItem('user_id')!;
    this.httpService.post('/v1/create-post', {post:this.post,_userid:this.user_id }).subscribe((res) => {
      console.log("Post ", this.post)
      this.postService.setValue(this.post)
    })
    //this.postService.post=this.post;
  }
}
