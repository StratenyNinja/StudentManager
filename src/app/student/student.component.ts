import { Component, Input } from '@angular/core';

export interface Student {
    name: string;
    surname: string;
    dateOfBirth: Date | null;
    grade: number;
    class: string;
    major: string;
    gender: string;
    info: string;
    disabled: boolean;
    lastEdited: Date;
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
        grade: 0,
        class: '',
        major: '',
        gender: '',
        info: '',
        disabled: false,
        lastEdited: new Date()
    };

    showMajor(): string {
        // split word by capital letters, then join with space
        return this.student.major.split(/(?=[A-Z])/).join(' ').toLowerCase();
    }
}