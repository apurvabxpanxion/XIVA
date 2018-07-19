import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { WebsiteComponent } from './website/website.component';
const appRoutes: Routes = [
    { path: '', component: WebsiteComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    ];

export const routing = RouterModule.forRoot(appRoutes);