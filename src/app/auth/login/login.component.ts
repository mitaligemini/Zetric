import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      pwd: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login(form: FormGroup) {
    if (this.myForm.get('email')?.errors) {
      console.log("email error");
    }
    else {
      console.log("email: ", this.myForm.value.email, " and pwd: ", this.myForm.value.pwd)
      const email = this.myForm.value.email;
      const password = this.myForm.value.pwd;
      this.authService.login(email!, password!)
    }
  }

  redirect() {
    this.router.navigateByUrl('signup');
  }
}
