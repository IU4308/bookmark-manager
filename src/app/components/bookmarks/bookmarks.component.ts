import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGrid } from '@ng-icons/bootstrap-icons';
import { octMarkGithub, octTasklist } from '@ng-icons/octicons';
import { BookmarksGridComponent } from './bookmarks-grid/bookmarks-grid.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { CommonModule } from '@angular/common';
import { Bookmark } from '../../shared/models/bookmark';

@Component({
    selector: 'app-bookmarks',
    standalone: true,
    imports: [
        CommonModule,
        NgIcon,
        BookmarksListComponent,
        BookmarksGridComponent,
    ],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.css',
    viewProviders: [
        provideIcons({ octMarkGithub, octTasklist, bootstrapGrid }),
    ],
})
export class BookmarksComponent {
    viewMode: 'Grid' | 'List' = 'List';

    bookmarks: Bookmark[] = [
        { id: 1, title: 'Angular', url: 'https://angular.io' },
        { id: 2, title: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { id: 3, title: 'Netlify', url: 'https://netlify.com' },
        { id: 4, title: 'Vercel', url: 'https://vercel.com' },
        { id: 5, title: 'GitHub', url: 'https://github.com' },
    ];

    setView(mode: 'Grid' | 'List') {
        this.viewMode = mode;
    }
}
