import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  register() {
    if (this.email && this.password) {
      const user = { name: this.name, email: this.email, password: this.password };
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
