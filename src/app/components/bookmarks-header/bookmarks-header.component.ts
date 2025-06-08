import { Component, input, output } from '@angular/core';
import { ViewModeDropdownComponent } from '../view-mode-dropdown/view-mode-dropdown.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons';
import { AddBookmarkButtonComponent } from '../add-bookmark-button/add-bookmark-button.component';

@Component({
    selector: 'app-bookmarks-header',
    imports: [NgIcon, ViewModeDropdownComponent, AddBookmarkButtonComponent],
    templateUrl: './bookmarks-header.component.html',
    styleUrl: './bookmarks-header.component.css',
    viewProviders: [provideIcons({ bootstrapSearch })],
})
export class BookmarksHeaderComponent {
    viewMode = input<'Grid' | 'List'>('List');
    viewModeChange = output<'Grid' | 'List'>();
}
