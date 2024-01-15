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

  // Login Form
  username: string = "";
  password: string = "";

  login() {
    if (this.username == "admin" && this.password == "admin") {
      this.loggedIn = true;
    } else {
      alert("Error: Invalid username or password.");
    }
  }

  logout() {
    this.loggedIn = false;
    this.username = "";
    this.password = "";
  }

  // Search Bar
  searchQuery: string = "";

  search() {
    if (this.searchQuery) {
      return this.students.filter(student => 
        (student.name + " " + student.surname).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      return this.students;
    }
  }

  // Student Selection
  selectedStudent: Student | null = null;

  selectStudent(student: Student) {
    if (this.selectedStudent === student) {
      this.selectedStudent = null;
    } else {
      this.selectedStudent = student;
    }
  }

  // Student Form variables
  studentName: string = "";
  studentSurname: string = "";
  studentDateOfBirth: Date | null = null;
  studentGrade: number | null = null;
  studentClass: string = "";
  studentMajor: string = "";
  studentGender: string = "";
  studentInfo: string = "";
  studentDisabled: boolean = false;

  // Students
  students: Student[] = [
    {
      name: "John",
      surname: "Doe",
      dateOfBirth: new Date("1990-01-01"),
      grade: 1.01,
      class: "a",
      major: 'physics',
      gender: 'male',
      info: 'Good student',
      disabled: false,
      lastEdited: null
    },
    {
      name: "Jane",
      surname: "Doe",
      dateOfBirth: new Date("1991-02-02"),
      grade: 2.46,
      class: "b",
      major: 'math',
      gender: 'female',
      info: 'Excellent student',
      disabled: true,
      lastEdited: null
    },
    {
      name: "Jim",
      surname: "Beam",
      dateOfBirth: new Date("1992-03-03"),
      grade: 3.26,
      class: "c",
      major: 'mechanicalEngineering',
      gender: 'male',
      info: 'Average student',
      disabled: false,
      lastEdited: null
    },
    {
      name: "Jill",
      surname: "Smith",
      dateOfBirth: new Date("1993-04-04"),
      grade: 4.5,
      class: "d",
      major: 'computerScience',
      gender: 'female',
      info: 'Below average student',
      disabled: true,
      lastEdited: null
    }
  ]

  fillForm() {
    if (this.selectedStudent) {
      this.studentName = this.selectedStudent.name;
      this.studentSurname = this.selectedStudent.surname;
      this.studentDateOfBirth = this.selectedStudent.dateOfBirth;
      this.studentGrade = this.selectedStudent.grade;
      this.studentClass = this.selectedStudent.class;
      this.studentMajor = this.selectedStudent.major;
      this.studentGender = this.selectedStudent.gender;
      this.studentInfo = this.selectedStudent.info;
      this.studentDisabled = this.selectedStudent.disabled;
    } else {
      alert("Error: No student selected.");
    }
  }

  isStudentInArray(name: string, surname: string): boolean {
    return this.students.some(student => 
      (student.name + " " + student.surname).toLowerCase() === (name + " " + surname).toLowerCase()
    );
  }

  addStudent() {
    this.addMode = true;
  }

  editStudent() {
    if (this.selectedStudent) {
      this.fillForm();
      this.editMode = true;
    } else {
      alert("Error: No student selected.");
    }
  }

  deleteStudent() {
    if (this.selectedStudent) {
      this.students = this.students.filter(student => student !== this.selectedStudent);
      this.selectedStudent = null;
    } else {
      alert("Error: No student selected.");
    }
  }

  saveStudent() {
    if (this.addMode) {
      if (!this.studentName || !this.studentSurname) {
        alert("Error: Name and Surname are required.");
        return;
      } else {
        if (this.isStudentInArray(this.studentName, this.studentSurname)) {
          alert("Error: Student already exists.");
          return;
        }
        let newStudent: Student = {
          name: this.studentName,
          surname: this.studentSurname,
          dateOfBirth: this.studentDateOfBirth,
          grade: this.studentGrade,
          class: this.studentClass,
          major: this.studentMajor,
          gender: this.studentGender,
          info: this.studentInfo,
          disabled: this.studentDisabled,
          lastEdited: null
        };

        this.students.push(newStudent);

        // Reset form variables
        this.studentName = "";
        this.studentSurname = "";
        this.studentDateOfBirth = null;
        this.studentGrade = null;
        this.studentClass = "";
        this.studentMajor = "";
        this.studentGender = "";
        this.studentInfo = "";
        this.studentDisabled = false;

        this.addMode = false;
      }
    } else if (this.editMode) {
      if (this.selectedStudent) {
        this.selectedStudent.name = this.studentName;
        this.selectedStudent.surname = this.studentSurname;
        this.selectedStudent.dateOfBirth = this.studentDateOfBirth;
        this.selectedStudent.grade = this.studentGrade;
        this.selectedStudent.class = this.studentClass;
        this.selectedStudent.major = this.studentMajor;
        this.selectedStudent.gender = this.studentGender;
        this.selectedStudent.info = this.studentInfo;
        this.selectedStudent.disabled = this.studentDisabled;
        this.selectedStudent.lastEdited = new Date();
    
        // Reset form variables
        this.studentName = "";
        this.studentSurname = "";
        this.studentDateOfBirth = null;
        this.studentGrade = null;
        this.studentClass = "";
        this.studentMajor = "";
        this.studentGender = "";
        this.studentInfo = "";
        this.studentDisabled = false;
    
        this.editMode = false;
      } else {
        alert("Error: No student selected.");
      }
    }
  }
}
