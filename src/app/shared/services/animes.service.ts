import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private baseApi = 'https://api.jikan.moe/v4/anime';

  private recomends = 'https://api.jikan.moe/v4/recommendations/anime';


  constructor(private http: HttpClient) { }

  getAllAnimes(): Observable<any> {
    return this.http.get<any>(this.baseApi);
  }

  getRecomends(): Observable<any> {
    return this.http.get<any>(this.recomends)
  }

  getAnimesById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseApi}/${id}`)
  }
}
