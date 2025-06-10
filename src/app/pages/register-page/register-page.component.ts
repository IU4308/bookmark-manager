import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.form.invalid) return;

        const { name, email, password } = this.form.value;

        this.authService.register(name, email, password).subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            error: () => alert('Registration failed'),
        });
    }
}
