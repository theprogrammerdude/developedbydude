import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  id: string = '';
  article: any = {};
  isEditing: boolean = false;
  uid: string = localStorage.getItem('uid') ?? '';

  options: any = {
    height: 300,
    immediateAngularModelUpdate: true,
    attribution: false,
  };

  scrollIndicator: number = 0;

  constructor(
    private db: DbService,
    private route: ActivatedRoute,
    private router: Router,
    private upload: UploadService
  ) {}

  ngOnInit(): void {
    // this.db.getSingleArticle()

    this.route.params.subscribe((value: any) => (this.id = value.id));

    this.db.getSingleArticle(this.id).then((res) => {
      this.article = res.data();
    });

    window.onscroll = () => (this.scrollIndicator = this.fillScrollBar());
  }

  delete() {
    this.db
      .deleteArticle(this.id)
      .then((res) => {
        this.upload
          .deleteImage(this.article.url)
          .then(() => {
            this.router.navigate(['']);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  edit() {
    this.isEditing = !this.isEditing;
  }

  update() {
    this.db
      .updateArticle(
        this.article.title,
        this.article.body,
        this.article.description,
        this.article.id
      )
      .then((res) => {
        console.log(res);
        this.isEditing = false;
      })
      .catch((err) => console.log(err));
  }

  fillScrollBar() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;

    return scrolled;
  }
}
