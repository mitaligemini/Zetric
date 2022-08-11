import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { PostService } from '../services/post.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  user_id: string = "";

  constructor(private postService: PostService, private http: HttpService, private router:Router) { }
  allPosts: any = [];
  posts: any = []
  message = "post uploaded"
  idOfPost:string=""

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    // console.log(this.user_id)
    // this.allPosts = ["Google was founded on September 4, 1998, by Larry Page and Sergey Brin while they were PhD students at Stanford University in California. Together they own about 14% of its publicly listed shares and control 56% of the stockholder voting power through super-voting stock. ",
    //   "Google strives for ambitious technological innovations aimed at solving humanity's biggest problems.[17] Some of these include quantum computing (Sycamore), self-driving cars (Waymo, formerly the Google Self-Driving Car Project), smart cities (Sidewalk Labs), and transformer models (Google Brain).",
    //   "Google began in January 1996 as a research project by Larry Page and Sergey Brin when they were both PhD students at Stanford University in California.[21][22][23] The project initially involved an unofficial, Scott Hassan, the original lead programmer who wrote much of the code for the original Google Search engine, but he left before Google was officially founded as a company"]

    this.http.post('/post/get-all-post', { _userId: this.user_id }).subscribe((res) => {
      //console.log("allposts", res)
      this.posts = res.posts;
      console.log("posts",this.posts)
    })
  }

  deletePost(event:any){
    console.log(event)
     this.http.post(`/post/delete/${event}`,{_userId:this.user_id}).subscribe((res)=>{
      console.log(res);
    })
    alert("Post deleted successfully")
    location.reload()
  }
  updatePost(event:any){
    console.log(event)
    this.router.navigateByUrl(`update/${event._id}`)
    
  }
}

