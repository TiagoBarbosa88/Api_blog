import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private baseApi = 'https://api.jikan.moe/v4/anime';

 private recomends = 'https://api.jikan.moe/v4/anime?q=naruto&limit=10';
 //private recomends = 'https://api.jikan.moe/v4/anime?q=recommendations&limit=10';



  constructor(private http: HttpClient) { }

  getAllAnimes(): Observable<any> {
    return this.http.get<any>(this.baseApi);
  }

  getRecomends(): Observable<any> {
    return this.http.get<any>(this.recomends)
  }

  getAnimesById(id: string | null): Observable<any> {
    const url = `${this.baseApi}/${id}`;
    return this.http.get(url)
  }
}
