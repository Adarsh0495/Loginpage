import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginid:string=''
  password:string=''
  constructor(private router:Router){}
  onlogin(){
    if (this.loginid.trim() === '' || this.password.trim() === '') {
      console.error('Login ID and password are required.');
      return;
    }
    console.log('login id is:',this.loginid);
    this.router.navigate(['/home'])
    
  }
}
