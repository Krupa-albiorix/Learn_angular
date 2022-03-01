
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewDataFormComponent } from './new-data-form/new-data-form.component';
import { CRUDComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubProfileService } from './github-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    NewDataFormComponent,
    CRUDComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'followers/:id/:username', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: GithubFollowersComponent 
      },
      { 
        path: 'posts', 
        component: CRUDComponent 
      },
      { 
        path: '**', 
        component: NotFoundComponent 
      },
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    GithubProfileService,
    { provide : ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
