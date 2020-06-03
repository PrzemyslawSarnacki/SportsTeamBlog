import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Kasztaned World' }
  },
  {
    path: 'post',
    component: PostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'post/details/:id',
    component: PostDetailsComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post/add',
    component: PostAddComponent,
    data: { title: 'Post Add' }
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent,
    data: { title: 'Post Edit' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
