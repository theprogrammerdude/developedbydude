import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.email !== '' && this.password !== '')
      this.auth.loginWithEmail(this.email, this.password).then((res) => {
        this.router.navigate(['']);
        localStorage.setItem('uid', res.user.uid);
      });
  }
}
