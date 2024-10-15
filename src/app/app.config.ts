import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthGuard } from './auth.guard';  // Ensure you have the guard created

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuard] },  // Protected route
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    // Other providers if necessary
  ]
};
