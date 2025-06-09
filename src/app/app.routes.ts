import { Routes } from '@angular/router';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: AuthPageComponent },
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
