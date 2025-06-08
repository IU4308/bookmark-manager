import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmark } from '../models/bookmark';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BookmarksService {
    private readonly apiUrl = `${environment.apiUrl}/bookmarks`;

    constructor(private http: HttpClient) {}

    getBookmarks(): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>(this.apiUrl);
    }
}
