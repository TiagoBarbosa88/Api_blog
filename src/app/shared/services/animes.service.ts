import { BehaviorSubject, Observable, Subject, first, map } from 'rxjs';
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

  private genresSelectedObservable = new Subject();
  public readonly genresSelected$ =
    this.genresSelectedObservable.asObservable();

  public getAllAnimes(): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/anime`);
  }

  public getRecomends(): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/anime?q=one-piece&limit=4`);
  }

  public getAnimesById(id: string | null): Observable<any> {
    return this.http.get(`${this.baseApi}/anime/${id}`);
  }

  public getAllGenresAnimes(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(`${this.baseApi}/genres/anime`);
  }

  public getAnimesByGenresSubscription(): void {
    this.getAllGenresAnimes()
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

  public getAnimesByGenre(categoryId: number) {
    return this.http.get(`${this.baseApi}/anime/${categoryId}`);
  }

  public getSelectedCategory(genreId: number): void {
    this.genresSelectedObservable.next(genreId);
    console.log(genreId);
  }
}
