import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Student {
    name: string;
    surname: string;
    dateOfBirth: Date | null;
    grade: number | null;
    class: string;
    major: string;
    gender: string;
    info: string;
    disabled: boolean;
    lastEdited: Date | null;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
    @Input() student: Student = {
        name: '',
        surname: '',
        dateOfBirth: null,
        grade: null,
        class: '',
        major: '',
        gender: '',
        info: '',
        disabled: false,
        lastEdited: null
    };
    @Input() selected: boolean = false;
    @Output() select = new EventEmitter<Student>();

    showMajor(): string {
        // split word by capital letters, then join with space
        return this.student.major.split(/(?=[A-Z])/).join(' ').toLowerCase();
    }

    onClick() {
        this.select.emit(this.student);
    }
}