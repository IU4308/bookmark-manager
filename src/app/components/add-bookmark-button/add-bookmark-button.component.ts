import { Component } from '@angular/core';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
    selector: 'app-add-bookmark-button',
    imports: [NgIcon],
    templateUrl: './add-bookmark-button.component.html',
    styleUrl: './add-bookmark-button.component.css',
    viewProviders: [provideIcons({ bootstrapPlus })],
})
export class AddBookmarkButtonComponent {}
