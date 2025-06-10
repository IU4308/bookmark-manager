import { Component, input, output } from '@angular/core';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-bookmarks-list',
    imports: [DomainPipe, NgOptimizedImage, DatePipe],
    templateUrl: './bookmarks-list.component.html',
})
export class BookmarksListComponent {
    bookmarks = input<Bookmark[]>([]);
    bookmarkDeleted = output<number>();

    constructor(private http: HttpClient) {}

    onDelete(id: number) {
        this.bookmarkDeleted.emit(id);
    }
}
