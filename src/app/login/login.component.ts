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
    const storeduserid=localStorage.getItem('user');
    if(this.loginid===storeduserid){
      this.router.navigate(['/home'])
     }
     else{
      alert('invlid username')
     }
    } 
  }

