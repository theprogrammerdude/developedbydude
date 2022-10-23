import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private storage: Storage) {}

  uploadArticleImage(file: any) {
    const storageref = ref(this.storage, nanoid());
    return uploadBytes(storageref, file);
  }

  getUrl(ref: any) {
    return getDownloadURL(ref);
  }

  deleteImage(url: string) {
    const storageref = ref(this.storage, url);
    return deleteObject(storageref);
  }
}
