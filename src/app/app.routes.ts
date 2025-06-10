import { Routes } from '@angular/router';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    { path: 'login', component: AuthPageComponent },
    { path: 'register', component: RegisterPageComponent },
    {
        path: ':id',
        component: BookmarksPageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '',
        component: BookmarksPageComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
