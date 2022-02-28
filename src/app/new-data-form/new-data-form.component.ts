import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-data-form',
  templateUrl: './new-data-form.component.html',
  styleUrls: ['./new-data-form.component.css']
})
export class NewDataFormComponent {
  form;

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
