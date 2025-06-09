import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-add-bookmark-button',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgIcon],
    templateUrl: './add-bookmark-button.component.html',
    styleUrl: './add-bookmark-button.component.css',
    viewProviders: [provideIcons({ bootstrapPlus })],
})
export class AddBookmarkButtonComponent {
    form: FormGroup;

    constructor(private http: HttpClient, private fb: FormBuilder) {
        this.form = this.fb.group({
            url: ['', Validators.required],
        });
    }

    openModal() {
        (
            document.getElementById('my_modal_1') as HTMLDialogElement
        )?.showModal();
    }

    closeModal() {
        (document.getElementById('my_modal_1') as HTMLDialogElement)?.close();
    }

    addBookmark() {
        if (this.form.invalid) return;
        const url = this.form.value.url.trim();
        this.http.post(`${environment.API_URL}/bookmarks`, { url }).subscribe({
            next: () => {
                alert('Bookmark added!');
                this.form.reset();
                this.closeModal();
            },
            error: () => alert('Failed to add bookmark'),
        });
    }
}
