import { Routes } from '@angular/router';

//import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HomeComponent } from './home/home.component';




export const routes: Routes = [
    
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-post', component: TaskFormComponent },
    { path: 'Home', component: HomeComponent},
    
];