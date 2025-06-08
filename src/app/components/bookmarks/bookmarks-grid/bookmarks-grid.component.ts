import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';

@Component({
    selector: 'app-bookmarks-grid',
    standalone: true,
    imports: [CommonModule, DomainPipe],
    templateUrl: './bookmarks-grid.component.html',
})
export class BookmarksGridComponent {
    bookmarks = input<Bookmark[]>([]);
}
