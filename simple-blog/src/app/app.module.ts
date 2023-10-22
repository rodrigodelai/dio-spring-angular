import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { HomeComponent } from './pages/home/home.component';
import { RegularNewsComponent } from './components/regular-news/regular-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainTitleComponent,
    MainNewsComponent,
    HomeComponent,
    RegularNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
