import { Component, OnInit } from '@angular/core';

import { AnimesService } from '../../shared/services/animes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  animes: any;
  id!: string | null;

  constructor(private animesService: AnimesService, private router: Router) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.animesService.getAllAnimes().subscribe((data) => {
      if (data && data.data) {
        this.animes = data.data;
      }
    });
  }

  getPostById(id: null | string) {
    this.router.navigate([`details/${id}`]);
  }
}
