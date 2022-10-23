import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'DevelopedbyDude';
  articles: Array<any> = [];

  constructor(private db: DbService, private router: Router) {}

  ngOnInit(): void {
    this.db.getArticles().subscribe((res) => {
      // console.log(res);
      this.articles = res;
    });
  }

  articleView(id: string) {
    this.router.navigate(['/article', id]);
  }
}
