import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  private baseApi = 'https://api.jikan.moe/v4/anime';

  private recomends = 'https://api.jikan.moe/v4/anime?q=naruto&limit=10';

  constructor(private http: HttpClient) {}

  getAllAnimes(): Observable<any> {
    return this.http.get<any>(this.baseApi);
  }

  getRecomends(): Observable<any> {
    return this.http.get<any>(this.recomends);
  }

  getAnimesById(id: string | null): Observable<any> {
    const url = `${this.baseApi}/${id}`;
    return this.http.get(url);
  }
}
