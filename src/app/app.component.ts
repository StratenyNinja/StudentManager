import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';

  // State variables
  loggedIn: boolean = false;

  // Login variables
  username: string = "";
  password: string = "";

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
