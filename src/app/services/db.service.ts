import { Injectable } from '@angular/core';
import {
  Firestore,
  setDoc,
  doc,
  collection,
  collectionData,
  getDoc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private db: Firestore) {}

  createArticle(title: string, body: string, description: string, url: string) {
    const id = nanoid();
    const docRef = doc(this.db, 'articles', id);

    return setDoc(docRef, {
      title,
      body,
      url,
      description,
      author: 'Shashank Jaitly',
      createdAt: Date.now(),
      id,
    });
  }

  getArticles() {
    const colRef = collection(this.db, 'articles');
    return collectionData(colRef);
  }

  getSingleArticle(id: string) {
    const docRef = doc(this.db, 'articles', id);
    return getDoc(docRef);
  }

  deleteArticle(id: string) {
    const docRef = doc(this.db, 'articles', id);
    return deleteDoc(docRef);
  }

  updateArticle(title: string, body: string, description: string, id: string) {
    const docRef = doc(this.db, 'articles', id);

    return updateDoc(docRef, {
      title,
      description,
      body,
    });
  }
}
