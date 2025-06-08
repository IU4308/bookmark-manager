import { Component, input, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { bootstrapGrid } from '@ng-icons/bootstrap-icons';
import { octMarkGithub, octTasklist } from '@ng-icons/octicons';
@Component({
    selector: 'app-view-mode-dropdown',
    standalone: true,
    imports: [CommonModule, NgIcon],
    templateUrl: './view-mode-dropdown.component.html',
    styleUrl: './view-mode-dropdown.component.css',
    viewProviders: [
        provideIcons({ octMarkGithub, octTasklist, bootstrapGrid }),
    ],
})
export class ViewModeDropdownComponent {
    viewMode = input<'Grid' | 'List'>('List');
    viewModeChange = output<'Grid' | 'List'>();

    changeMode(mode: 'Grid' | 'List') {
        this.viewModeChange.emit(mode);
    }
}
