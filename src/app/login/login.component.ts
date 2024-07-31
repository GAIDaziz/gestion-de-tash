import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userSevice: UserService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }


  submit(){
    if(this.loginForm.valid){
      this.userSevice.login(this.loginForm.value).subscribe({
        next : (response) => {
          console.log(response)
          localStorage.setItem('token', response.token);
      
          this.router.navigateByUrl('/')
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }
}