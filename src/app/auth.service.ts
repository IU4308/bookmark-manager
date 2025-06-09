import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly API = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http
            .post<{ access_token: string }>(`${this.API}/login`, {
                email,
                password,
            })
            .pipe(
                tap((res) => localStorage.setItem('token', res.access_token))
            );
    }

    register(email: string, password: string) {
        return this.http.post<{ access_token: string }>(
            `${this.API}/register`,
            { email, password }
        );
    }

    decodeToken(token: string): any {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    }
}
