import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { BadInput } from '../common/bad-input';
// import { Http } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  posts : any;

  constructor(private service : PostService) { 
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input : HTMLInputElement) {
    let post = { title : input.value};
    this.posts.splice(0, 0, post);
    input.value = '';
  
    this.service.create(post)
      .subscribe(
        newPost => {
          console.log(newPost);
        }, 
        (error : AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        updatePost => {
          console.log(updatePost);
        });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(3453546)
      .subscribe(
        null,
        (error : AppError) => {
          this.posts.splice(index, 0 , post);
          if (error instanceof NotFoundError) 
            alert('This post is already been deleted.');
          else throw error;
        });
  }

}
