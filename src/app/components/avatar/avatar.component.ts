import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signout() {
    this.auth.logout().then(() => {
      localStorage.clear();
      this.router.navigate(['']);
    });
  }
}
