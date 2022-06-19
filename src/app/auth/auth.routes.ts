import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
export const authRoutes: Routes = [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
];