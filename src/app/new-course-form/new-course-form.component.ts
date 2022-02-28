import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic : HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic : any) {
    console.log(topic)
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  constructor (fb : FormBuilder) {
    this.form = fb.group({
      name : ['', Validators.required],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    });
  }
  
}
