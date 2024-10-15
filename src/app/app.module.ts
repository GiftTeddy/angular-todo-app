import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- Add this
import { RouterModule, Routes } from '@angular/router'; // For routing
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; // Root component
import { LoginComponent } from './components/login/login.component'; // Login component
import { RegisterComponent } from './components/register/register.component'; // Register component
import { TodoListComponent } from './components/todo-list/todo-list.component'; // Todo List component

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule, 
      RouterModule.forRoot(routes),  // <-- Ensure RouterModule is correctly imported here
      ReactiveFormsModule 
    ],
    declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      TodoListComponent
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
