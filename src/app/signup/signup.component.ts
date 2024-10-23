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

  constructor(private router:Router){
  }

  onSubmit(){
    if (this.username.trim() === '' || this.password.trim() === '') {
      console.error('Login ID and password are required.');
      return;
    }
    
    console.log('User signed up:',this.username);
    this.router.navigate(['/login'])
    
  }
}
