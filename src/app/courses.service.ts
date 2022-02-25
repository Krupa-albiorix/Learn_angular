import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getnames() {
    return ["Chetan Bhagat", "Amrita Pritam", "Rabindranath Tagore"];
  }

  constructor() { }
}
