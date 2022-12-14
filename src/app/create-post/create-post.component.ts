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
  user_id: string = ""

  constructor(private postService: PostService, private httpService: HttpService) { }

  ngOnInit(): void { }

  postData() {
    this.user_id = localStorage.getItem('user_id')!;
    if (this.post != "") {
      this.httpService.post('/post/create-post', { post: this.post, _userId: this.user_id }).subscribe((res) => {
        console.log("Post ", this.post)
        // this.postService.setValue(this.post)
        this.post = ""
        location.reload();
      })
    }
    else {
      alert("Post can't be empty")
    }
    //this.postService.post=this.post;
  }
}
