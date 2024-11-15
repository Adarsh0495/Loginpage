import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username:string='';
  password:string='';

  constructor(private router:Router){}

  onSubmit(){

  if(!this.username||!this.password){
    alert('username and password are required');
    return;
    }
    localStorage.setItem('user',this.username);
    this.router.navigate(['/login'])
 

    }
  }

