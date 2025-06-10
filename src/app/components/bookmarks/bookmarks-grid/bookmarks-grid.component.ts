import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe, NgOptimizedImage } from '@angular/common';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octTrash } from '@ng-icons/octicons';

@Component({
    selector: 'app-bookmarks-grid',
    standalone: true,
    imports: [CommonModule, DomainPipe, NgOptimizedImage, DatePipe, NgIcon],
    templateUrl: './bookmarks-grid.component.html',
    viewProviders: [provideIcons({ octTrash })],
})
export class BookmarksGridComponent {
    bookmarks = input<Bookmark[]>([]);
    bookmarkDeleted = output<number>();

    onDelete(id: number) {
        this.bookmarkDeleted.emit(id);
    }
}
