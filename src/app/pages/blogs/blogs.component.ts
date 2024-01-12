import { Component, OnInit } from '@angular/core';
import { Article, DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  articles: Array<Article> = [];

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getArticles().subscribe((res) => {
      res.forEach((e) => {
        this.articles.push(e as Article);
      });
    });
  }

  calculateReadTime(d: string) {
    const words = d.split(' ');
    const readtime = words!.length / 200;

    return readtime;
  }
}
