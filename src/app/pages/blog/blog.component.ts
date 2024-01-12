import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  id: string = '';
  article?: Article;

  constructor(private route: ActivatedRoute, private db: DbService) {
    route.params.subscribe((res: any) => {
      this.id = res.id;
    });
  }

  ngOnInit(): void {
    this.db.getArticle(this.id).then((res) => {
      this.article = res.data() as Article;
      this.calculateReadTime();
    });
  }

  calculateReadTime() {
    const words = this.article?.content.split(' ');
    const readtime = words!.length / 200;

    return readtime;
  }
}
