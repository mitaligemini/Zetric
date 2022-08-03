import { PostService } from './../services/postService';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post:string=""

  constructor(private postService:PostService) { }


  ngOnInit(): void {}
    
  onSubmit(){
    this.postService.setValue(this.post)
   
    
    //this.postService.post=this.post;
    
  }
  
}
