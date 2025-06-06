import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-bookmarks',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.css',
})
export class BookmarksComponent {
    bookmarks = [
        { id: 1, title: 'Angular', url: 'https://angular.io' },
        { id: 2, title: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { id: 3, title: 'Netlify', url: 'https://netlify.com' },
        { id: 4, title: 'Vercel', url: 'https://vercel.com' },
        { id: 5, title: 'GitHub', url: 'https://github.com' },
    ];
}
