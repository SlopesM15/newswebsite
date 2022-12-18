import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpage/navbar/navbar.component';
import { FooterComponent } from './sharedpage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { VideosComponent } from './pages/videos/videos.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticlesComponent,
    VideosComponent,
    AboutComponent,
    ArticlepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
