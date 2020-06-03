import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { DirectivesModule } from './directives/directives.module';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';

import { NavbarComponent } from './navbar/navbar.component';

import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReadyComponent } from './ready/ready.component';
import { PostComponent } from './post/post.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    GalleryComponent,
    NavbarComponent,
    HomeComponent,
    ReadyComponent,
    PostComponent,
    PostAddComponent,
    PostDetailsComponent,
    PostEditComponent,
    CategoryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    // DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    GalleryComponent,
    NavbarComponent,
    ReadyComponent,
    PostComponent,
    PostAddComponent,
    PostDetailsComponent,
    PostEditComponent,
    CategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
