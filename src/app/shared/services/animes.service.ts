import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  private baseApi = 'https://api.jikan.moe/v4';

  private http = inject(HttpClient);

  private genresObservable = new BehaviorSubject<any[]>([]);
  public readonly genres$ = this.genresObservable.asObservable();

  public getAllAnimes(): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/anime`);
  }

  public getRecomends(): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/anime?q=one-piece&limit=4`);
  }

  public getAnimesById(id: string | null): Observable<any> {
    return this.http.get(`${this.baseApi}/anime/${id}`);
  }

  public getAnimesByGenre(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(`${this.baseApi}/genres/anime`);
  }

  public getAnimesByGenreSubscription(): void {
    this.getAnimesByGenre()
      .pipe(
        first(),
        map((data) => {
          return data.data;
        })
      )
      .subscribe((data) => {
        this.genresObservable.next(data);
      });
  }
}
