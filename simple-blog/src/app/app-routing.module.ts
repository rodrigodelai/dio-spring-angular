import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent }, 
  { path: 'posts/:id', component: PostComponent }, 
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
