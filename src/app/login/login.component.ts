import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName! : string;
  password!: string;
  formData!: FormGroup;

  constructor(
    private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName : new FormControl(),
      password : new FormControl()
    });
  }

  onClickSubmit(data : any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login Page: " + this.userName);
    console.log("Login Page: " + this.password);

    this.authService.login(this.userName, this.password)
      .subscribe( (data: string) => {
        console.log('Is login successful: ' + data);

        if(data) this.router.navigate(['/navbar']);
      });
  }

}
