import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  task: any = {
    title : 'Review Application',
    assignee : null
  }

  courses = [1, 2, 3, 4];

  viewmode = 'map';

  datas : any;

  loaddata() {
    this.datas = [
      { id: 1, name: "data1" },
      { id: 2, name: "data2" },
      { id: 3, name: "data3" }
    ];
  }

  trackCourse(datas: any) {
    return datas ? datas.id : undefined;
  }

  onAdd() {
    this.datas.push({ id: 4,name:"data4" });
  }
  onRemove() {
    this.datas.pop();
  }
  onChange(data: { name: string; }) {
    data.name = "Updated";
  }

  @Input() isFavorite : boolean = false;
  // isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {   }

  ngOnInit() {
    console.log (this.isFavorite);
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue : this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue : boolean;
}
