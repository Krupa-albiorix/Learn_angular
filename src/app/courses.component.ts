// import { CoursesComponent } from './courses/courses.component';
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component ({
    selector : 'courses',
    template : `<h2>{{ title }}</h2>
                <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'black'">save</button><br>
                <img [src]="imageUrl" />
                
                <table>
                    <tr>
                        <td [attr.colspan] = "colSpan"></td>
                    </tr>
                </table>
                <input #email (keyup.enter) = "onKeyUp(email.value)" />
                
                <div (click)="onDivClicked()">
                    <button (click)="onSave($event)">Save</button>
                </div>
                
                <ul>
                    <li *ngFor = "let name of names">
                        {{ name }}
                    </li>
                </ul>

                {{ course.title | uppercase | lowercase }}<br/>
                {{ course.rating | number:'2.1-1' }}<br/>
                {{ course.students | number }}<br/>
                {{ course.price | currency:'CAD':true }}<br/>
                {{ course.releaseDate | date:'shortDate' }}<br/>
                {{ text | summary:20 }}<br/>
                `
})
export class CoursesComponent {
    title = "List of Authors";
    colSpan = 2;
    imageUrl = "reading-book.jpg";
    names: any;
    isActive = true;
    text = "Now type angular specific version command : npm install @angular/cli@1.7.x for angular 5. and use similar command for other version. After complete the installation, just create new angular project into your specific folder that you recently install angular";

    course = {
        title : "The complete angular course",
        rating : 4.70808,
        students : 40123,
        price : 500,
        releaseDate : new Date(2022, 24, 2)
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event: any) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    // email = "krupa.albiorix@gmail.com";
    // onKeyUp() {
    //     console.log(this.email);
    // }

    onKeyUp(email: any) {
        console.log(email);
    }

    constructor(service: CoursesService) {
        this.names = service.getnames();
    }
}