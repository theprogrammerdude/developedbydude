import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: string = localStorage.getItem('title') ?? '';
  description: string = localStorage.getItem('description') ?? '';
  editortext: string = localStorage.getItem('editortext') ?? '';
  files: File[] = [];

  options: any = {
    height: 300,
    immediateAngularModelUpdate: true,
    attribution: false,
    events: {
      contentChanged: () => {
        this.saveLocal();
      },
    },
  };

  constructor(private db: DbService, private upload: UploadService) {}

  ngOnInit(): void {}

  fileInput(ev: any) {
    console.log(ev.target.files);
  }

  create() {
    this.upload
      .uploadArticleImage(this.files[0])
      .then((res) => {
        // console.log(res);

        this.upload.getUrl(res.ref).then((data) => {
          this.db
            .createArticle(this.title, this.editortext, this.description, data)
            .then(() => {
              this.title = '';
              this.editortext = '';
              this.description = '';
              this.files = [];

              this.clearLocal();
            });
        });
      })
      .catch((err) => console.log(err));
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  saveLocal() {
    localStorage.setItem('title', this.title);
    localStorage.setItem('description', this.description);
    localStorage.setItem('editortext', this.editortext);
  }

  clearLocal() {
    localStorage.removeItem('title');
    localStorage.removeItem('description');
    localStorage.removeItem('editortext');
  }
}
