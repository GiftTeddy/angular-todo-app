import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './app/app.routes';  // Import your routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
}).catch(err => console.error(err));
