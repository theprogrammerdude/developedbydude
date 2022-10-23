import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    meta.addTags([
      {
        name: 'description',
        content: 'TheProgrammerDude blog application',
      },
      {
        name: 'author',
        content: 'TheProgrammerDude',
      },
      {
        name: 'keywords',
        content: 'blog, TheProgrammerDude, youtube, angular, developedbydude',
      },
    ]);

    title.setTitle('DevelopedByDude');
  }
}
