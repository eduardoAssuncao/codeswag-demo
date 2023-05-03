import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    try {
      await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if (await this.ngFireAuth.currentUser) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
      alert('login failed!');
    }
  }

  async register() {
    try {
      await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      alert('registration successful!');
    } catch (error) {
      console.log(error);
      alert('register failed!');
    }
  }

}
