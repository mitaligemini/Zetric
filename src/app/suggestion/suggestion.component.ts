import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
 

  constructor(private httpService:HttpService) {}
  suggestedUsers:any=[]
  ngOnInit(): void {
    this.httpService.get("/users/all-users").subscribe((res)=>{
      //console.log("all-users",res)
      this.suggestedUsers=res;
      console.log("suggest", this.suggestedUsers)
      // this.suggestedUsers.forEach((element: { username: String; follwer_id:String }) => {
      //   console.log("ele",element)
      // });
  
    })
  }
}
