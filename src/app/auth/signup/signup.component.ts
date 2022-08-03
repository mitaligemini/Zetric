import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authService:AuthService
   
   
    ) { }
  myForm!: FormGroup ;

  signup(form: FormGroup) {   
       if (this.myForm.invalid) {
         return;
       }
      const email= this.myForm.value.email;
      const phone= this.myForm.value.phone; 
      const password= this.myForm.value.pwd;
  
    this.authService.signup(email, phone, password);
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      phone: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      pwd: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  redirect(){
    this.router.navigateByUrl('signup');
  }
}
