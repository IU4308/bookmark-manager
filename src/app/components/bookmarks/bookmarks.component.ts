import { Component } from '@angular/core';
import { BookmarksGridComponent } from './bookmarks-grid/bookmarks-grid.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { CommonModule } from '@angular/common';
import { Bookmark } from '../../shared/models/bookmark';
import { BookmarksHeaderComponent } from '../bookmarks-header/bookmarks-header.component';
import { BookmarksService } from '../../shared/services/bookmarks.service';

@Component({
    selector: 'app-bookmarks',
    standalone: true,
    imports: [
        CommonModule,
        BookmarksHeaderComponent,
        BookmarksListComponent,
        BookmarksGridComponent,
    ],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.css',
})
export class BookmarksComponent {
    bookmarks: Bookmark[] = [];
    viewMode: 'Grid' | 'List' = 'List';

    constructor(private bookmarksService: BookmarksService) {}

    ngOnInit() {
        this.bookmarksService.getBookmarks().subscribe({
            next: (data) => {
                this.bookmarks = data;
            },
            error: (err) => {
                console.error('Failed to load bookmarks', err);
            },
        });
    }

    setView(mode: 'Grid' | 'List') {
        this.viewMode = mode;
    }
}
