import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @ViewChild('alert', { read: ElementRef, static: false }) alert!: ElementRef;
  @ViewChild('loader', { read: ElementRef, static: false }) loader!: ElementRef;

  email: string = '';
  password: string = '';
  error: string = '';
  uid: string = localStorage.getItem('uid') ?? '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.uid) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.loader.nativeElement.classList.remove('hidden');

    this.auth
      .emailSignIn(this.email, this.password)
      .then((res) => {
        // console.log(res);
        localStorage.setItem('uid', res.user.uid);

        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        // console.log(err);

        this.loader.nativeElement.classList.add('hidden');
        this.alert.nativeElement.classList.remove('hidden');
        this.error = err.toString().split(': ')[2];

        setTimeout(() => {
          this.alert.nativeElement.classList.add('hidden');
        }, 2000);
      });
  }
}
