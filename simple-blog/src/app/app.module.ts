import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { MainArticleComponent } from './components/main-article/main-article.component';
import { MainPostComponent } from './components/main-post/main-post.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RegularPostComponent } from './components/regular-post/regular-post.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    MainArticleComponent,
    MainPostComponent,
    MainTitleComponent,
    MenuBarComponent,
    RegularPostComponent,
    LatestPostsComponent,
    CategoriesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
