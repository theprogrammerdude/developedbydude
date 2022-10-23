import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/js/third_party/embedly.min';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadingTimePipe } from './pipes/read-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    ArticleComponent,
    FooterComponent,
    ReadingTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
