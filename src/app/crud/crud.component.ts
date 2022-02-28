import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { Http } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  posts : any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { 
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input : HTMLInputElement) {
    let post = { title : input.value};
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
      })
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead : true}))
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post : any) {
    this.http.delete(this.url + '/' +post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
