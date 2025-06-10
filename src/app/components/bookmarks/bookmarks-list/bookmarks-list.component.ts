import { Component, input, output } from '@angular/core';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octTrash } from '@ng-icons/octicons';

@Component({
    selector: 'app-bookmarks-list',
    imports: [DomainPipe, NgOptimizedImage, DatePipe, NgIcon],
    templateUrl: './bookmarks-list.component.html',
    viewProviders: [provideIcons({ octTrash })],
})
export class BookmarksListComponent {
    bookmarks = input<Bookmark[]>([]);
    bookmarkDeleted = output<number>();

    onDelete(id: number) {
        this.bookmarkDeleted.emit(id);
    }
}
