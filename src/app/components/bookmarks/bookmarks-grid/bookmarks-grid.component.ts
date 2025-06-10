import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe, NgOptimizedImage } from '@angular/common';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-bookmarks-grid',
    standalone: true,
    imports: [CommonModule, DomainPipe, NgOptimizedImage, DatePipe],
    templateUrl: './bookmarks-grid.component.html',
})
export class BookmarksGridComponent {
    bookmarks = input<Bookmark[]>([]);
    bookmarkDeleted = output<number>();

    constructor(private http: HttpClient) {}

    onDelete(id: number) {
        this.bookmarkDeleted.emit(id);
    }

    // deleteBookmark(id: number) {
    //     this.http.delete(`${environment.API_URL}/bookmarks/${id}`).subscribe({
    //         next: () => {
    //             this.bookmarkDeleted.emit(id);
    //         },
    //         error: () => alert('Failed to delete bookmark'),
    //     });
    // }
}
