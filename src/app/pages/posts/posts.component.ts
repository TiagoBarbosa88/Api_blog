import { Component, OnInit, inject } from '@angular/core';

import { AnimesService } from '../../shared/services/animes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private animesService = inject(AnimesService);
  private router = inject(Router);
  public animes: any;
  public id!: string | null;

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.animesService.getAllAnimes().subscribe((data) => {
      if (data && data.data) {
        this.animes = data.data;
      }
    });
  }

  getPostById(id: null | string) {
    this.router.navigate([`details/${id}`]);
  }

  public getByGenres() {
    const id = this.animesService.genresSelected$.subscribe((data) => {
      this.animes = data;
    });
  }
}
