import { Component, input, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
import { DomainPipe } from '../../../pipes/domain.pipe';
import { Bookmark } from '../../../shared/models/bookmark';

@Component({
    selector: 'app-bookmarks-list',
    imports: [DomainPipe, NgIcon],
    providers: [provideIcons({ octMarkGithub })],
    templateUrl: './bookmarks-list.component.html',
})
export class BookmarksListComponent {
    bookmarks = input<Bookmark[]>([]);
}
