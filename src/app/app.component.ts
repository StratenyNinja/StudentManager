import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';

  // Login variables
  username: string = "";
  password: string = "";

  login() {
    if (this.username == "admin" && this.password == "admin") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  }
}
