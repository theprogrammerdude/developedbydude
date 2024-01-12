import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';

export interface Article {
  content: string;
  createdAt: number;
  description: string;
  title: string;
  id: string;
  url: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  createArticle(data: any) {
    const docRef = doc(this.firestore, 'articles', data.id);

    setDoc(docRef, data);
  }

  getArticles() {
    const articlesCollection = collection(this.firestore, 'articles');
    return collectionData(articlesCollection);
  }

  getArticle(id: string) {
    const articleRef = doc(this.firestore, 'articles', id);
    return getDoc(articleRef);
  }
}
