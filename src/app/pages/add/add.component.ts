import { Component, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { uploadBytesResumable } from 'rxfire/storage';
import { DbService } from 'src/app/services/db.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class AddComponent {
  private storage: Storage = inject(Storage);

  content: string = '';
  title: string = '';
  description: string = '';
  user?: User;
  imgUrl: string = '';
  file?: File;

  isloading: boolean = false;
  isEditingTitle: boolean = false;
  isEditingDescription: boolean = false;

  constructor(private db: DbService) {}

  publish = async () => {
    if (
      this.content !== '' &&
      this.title !== '' &&
      this.description !== '' &&
      this.imgUrl !== ''
    ) {
      this.isloading = true;

      const id = uuidv4();

      var storageRef = ref(this.storage, this.file!.name);
      uploadBytesResumable(storageRef, this.file!).subscribe(async (res) => {
        var url = await getDownloadURL(storageRef);

        var data = {
          title: this.title,
          description: this.description,
          content: this.content,
          createdAt: Date.now(),
          username: 'TheProgrammerDude',
          id,
          url,
        };

        this.db.createArticle(data);
        this.isloading = false;

        this.content = this.title = this.description = this.imgUrl = '';
      });
    }
  };

  getImg(e: any) {
    e.preventDefault();
    this.imgUrl = URL.createObjectURL(e.target.files[0]);
    this.file = e.target.files[0];
  }
}
