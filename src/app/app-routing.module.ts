import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'articles/:id', component:ArticlepageComponent},
  {path:'vidoes',component:VideosComponent},
  {path:'about',component:AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
