import { Cars } from './cars';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './course/course.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  post = {
    title : "Title",
    isFavorite : true
  }

  onFavoriteChanged(eventargs : FavoriteChangedEventArgs) {
    console.log("Favorite Changed", eventargs);
  }
  cars : Cars[] = [
    {
      "name" : "Kia",
      "color" : "blue"
    },
    {
      "name" : "BMW",
      "color" : "Red"
    },
    {
      "name": "Ford",
      "color": 'olive'
    }
  ]

  title1 = 'Expense Manager';
  isUserLoggedIn = false;

   constructor(private authService: AuthService) {}

   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else


         this.isUserLoggedIn = false;
   }

}
