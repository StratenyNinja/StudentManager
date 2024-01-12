import { Component } from '@angular/core';
import { Student, StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Manager';

  // State variables
  loggedIn: boolean = false;

  // Login variables
  username: string = "";
  password: string = "";

  // Students
  students: Student[] = [
    {
      name: "John",
      surname: "Doe",
      dateOfBirth: new Date("1990-01-01"),
      grade: 1,
      class: "A",
      major: 'Science',
      gender: 'Male',
      info: 'Good student',
      disabled: false,
      lastEdited: new Date()
    },
    {
      name: "Jane",
      surname: "Doe",
      dateOfBirth: new Date("1991-02-02"),
      grade: 2,
      class: "B",
      major: 'Math',
      gender: 'Female',
      info: 'Excellent student',
      disabled: false,
      lastEdited: new Date()
    },
    {
      name: "Jim",
      surname: "Beam",
      dateOfBirth: new Date("1992-03-03"),
      grade: 3,
      class: "C",
      major: 'English',
      gender: 'Male',
      info: 'Average student',
      disabled: false,
      lastEdited: new Date()
    },
    {
      name: "Jill",
      surname: "Smith",
      dateOfBirth: new Date("1993-04-04"),
      grade: 4,
      class: "D",
      major: 'History',
      gender: 'Female',
      info: 'Below average student',
      disabled: false,
      lastEdited: new Date()
    }
  ]

  login() {
    if (this.username == "admin" && this.password == "admin") {
      this.loggedIn = true;
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  }

  logout() {
    this.loggedIn = false;
    alert("Logout Successful");
  }
}
