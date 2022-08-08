import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_id:string="";
  userDetails:any=""
  userName:string=""

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id')!;
    this.http.get(`/v2/profile/${this.user_id}`).subscribe((res)=>{
     this.userDetails=res;
      console.log(this.userDetails[0].userName)
      this.userName=this.userDetails[0].userName;

    })
  }

}
