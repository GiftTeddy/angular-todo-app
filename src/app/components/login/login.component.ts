import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.email === this.email && storedUser.password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/todo-list']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
