import { Component } from '@angular/core';
import { Signin } from '../models/signin';
import { tap } from 'rxjs';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { TokenValidationService } from '../token-validation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signin: Signin = new Signin('', '', '', new Date(), '', '');
  confirmPassword: string = '';
  isLoginFormVisible: boolean;



  constructor(private dataService : DataService,private http: HttpClient , private location: Location, private router : Router, private tokenValidationService : TokenValidationService) { 
    this.isLoginFormVisible = false;
  }


  onSubmit() {
    if (this.signin.password !== this.confirmPassword) {
      return alert('Les mots de passe ne correspondent pas');
    }

    fetch(`${this.dataService.serveUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.signin.name,
        password: this.signin.password,
        email: this.signin.email,
        birthday: this.signin.birthday,
        firstname: this.signin.firstname,
        username: this.signin.pseudo,

      })
    })

  .then(response => response.json())

  .then(user => {



    if (user && user.data.token){
      if(this.tokenValidationService.isTokenValid()){
        this.router.navigate(['/search-train']);
      }
    }


  });

  

  }

  returnSalon() {
    this.location.back();
  }
  logIn() {

    console.log('login');

  }



  signUp() {

    console.log('sign up');

  }








}






