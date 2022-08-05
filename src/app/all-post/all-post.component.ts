import { PostService } from '../services/post.service';
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
    this.allPosts = ["Google was founded on September 4, 1998, by Larry Page and Sergey Brin while they were PhD students at Stanford University in California. Together they own about 14% of its publicly listed shares and control 56% of the stockholder voting power through super-voting stock. ",
      "Google strives for ambitious technological innovations aimed at solving humanity's biggest problems.[17] Some of these include quantum computing (Sycamore), self-driving cars (Waymo, formerly the Google Self-Driving Car Project), smart cities (Sidewalk Labs), and transformer models (Google Brain).",
      "Google began in January 1996 as a research project by Larry Page and Sergey Brin when they were both PhD students at Stanford University in California.[21][22][23] The project initially involved an unofficial, Scott Hassan, the original lead programmer who wrote much of the code for the original Google Search engine, but he left before Google was officially founded as a company"]
    this.PostService.getValue().subscribe((value) => {
      if (value != '') {
        this.allPosts.push(value)
        console.log("post posted")
      }
    });
  }
}


