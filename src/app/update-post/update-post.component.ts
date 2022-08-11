import { HttpService } from './../services/http.service';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  user_id: string = '';
  post_id: string = "";
  post: string = ""
  
  constructor(private httpService: HttpService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      updated_post_value: [this.post],
    });
    this.route.params.subscribe(res => this.post_id = res['id']);
    this.user_id = localStorage.getItem('user_id')!;
    this.httpService.post(`/post/get-post/${this.post_id}`, { _userId: this.user_id }).subscribe((res) => {
      // console.log(res.post[0])
      this.post = res.post[0].post
      console.log("post", this.post)
    })
  }

  update(form: FormGroup) {
    if (this.myForm.controls['updated_post_value'].value == "") {
      this.myForm.controls['updated_post_value'].setValue(this.post)
      console.log(this.myForm.controls['updated_post_value'].value)
    }
    console.log(form)
    this.httpService.put(`/post/update/${this.post_id}`, { _userId: this.user_id, post: this.myForm.controls['updated_post_value'].value }).subscribe((res) => {
      console.log(res)
      this.router.navigateByUrl('/timeline')
      alert('post updated sucessfully')
    })
  }
}
