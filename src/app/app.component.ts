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
  editMode: boolean = false;
  addMode: boolean = false;

  // Login variables
  username: string = "";
  password: string = "";

  // Search variables
  searchQuery: string = "";

  // Student Form variables
  studentName: string = "";
  studentSurname: string = "";
  studentDateOfBirth: Date = new Date();
  studentGrade: number | null = null;
  studentClass: string = "";
  studentMajor: string = "";
  studentGender: string = "";
  studentInfo: string = "";
  studentDisabled: boolean = false;
  studentLastEdited: Date = new Date();

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
    } else {
      alert("Login Failed: Invalid username or password.");
    }
  }

  logout() {
    this.loggedIn = false;
  }

  search() {
    if (this.searchQuery) {
      return this.students.filter(student => 
        (student.name + " " + student.surname).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      return this.students;
    }
  }

  addStudent() {
    this.addMode = true;
  }

  saveStudent() {
    if (this.addMode) {
      if (!this.studentName || !this.studentSurname) {
        alert("Error: Name and Surname are required.");
        return;
      } else {
        let newStudent: Student = {
          name: this.studentName,
          surname: this.studentSurname,
          dateOfBirth: this.studentDateOfBirth,
          grade: this.studentGrade || 0,
          class: this.studentClass,
          major: this.studentMajor,
          gender: this.studentGender,
          info: this.studentInfo,
          disabled: this.studentDisabled,
          lastEdited: this.studentLastEdited
        };

        this.students.push(newStudent);

        // Reset form variables
        this.studentName = "";
        this.studentSurname = "";
        this.studentDateOfBirth = new Date();
        this.studentGrade = null;
        this.studentClass = "";
        this.studentMajor = "";
        this.studentGender = "";
        this.studentInfo = "";
        this.studentDisabled = false;
        this.studentLastEdited = new Date();

        this.addMode = false;
      }
    }
  }
}
