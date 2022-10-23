import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu', { read: ElementRef, static: false }) menu!: ElementRef;
  @Input() isVisible: boolean = false;
  url: string = '';

  uid: string = localStorage.getItem('uid') ?? '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.url = this.router.url;
  }

  toggleMenu() {
    var isHidden = this.menu.nativeElement.classList.contains('hidden');

    if (isHidden) {
      this.menu.nativeElement.classList.remove('hidden');
    } else {
      this.menu.nativeElement.classList.add('hidden');
    }
  }

  signout() {
    this.auth.logout();
    localStorage.clear();

    this.router.navigate(['']);
  }
}
