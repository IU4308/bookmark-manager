import { Routes } from '@angular/router';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';

export const routes: Routes = [
    { path: 'bookmarks', component: BookmarksPageComponent },
    { path: '**', redirectTo: 'bookmarks' },
];
