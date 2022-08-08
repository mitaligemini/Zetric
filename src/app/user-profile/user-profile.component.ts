import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm!: FormGroup;
  user_id: string = "";
  userDetails: any = "";
  userName: string = "";
  email: string = "";
  phone: string = "";

  constructor(private http: HttpService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.user_id = localStorage.getItem('user_id')!;
    
    this.http.get(`/v2/profile/${this.user_id}`).subscribe((res) => {
      this.userDetails = res;
      this.userName = this.userDetails[0].userName;
      this.email = this.userDetails[0].email;
      this.phone = this.userDetails[0].phone;
      this.userProfileForm.controls['email'].setValue(this.email)
      this.userProfileForm.controls['name'].setValue(this.userName)
      this.userProfileForm.controls['phone'].setValue(this.phone)
      this.userProfileForm.controls['address'].setValue("Gemini Solutions")
      console.log("userform", this.userProfileForm)
    })
  }
}
