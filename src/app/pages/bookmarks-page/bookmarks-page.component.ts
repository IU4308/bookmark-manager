import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from '../../components/bookmarks/bookmarks.component';

@Component({
    selector: 'app-bookmarks-page',
    imports: [BookmarksComponent],
    templateUrl: './bookmarks-page.component.html',
    styleUrl: './bookmarks-page.component.css',
})
export class BookmarksPageComponent {}
