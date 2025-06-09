import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-auth-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './auth-page.component.html',
})
export class AuthPageComponent {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.loginForm.invalid) return;

        const { email, password } = this.loginForm.value;

        this.authService.login(email, password).subscribe({
            next: (res) => {
                localStorage.setItem('token', res.access_token);
                const decodedToken = this.authService.decodeToken(
                    res.access_token
                );
                this.router.navigate([`/${decodedToken.sub}`]);
            },
            error: () => alert('Invalid credentials'),
        });
    }
}
