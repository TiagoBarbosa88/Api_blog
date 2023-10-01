import { Component, OnInit, inject } from '@angular/core';

import { AnimesService } from 'src/app/shared/services/animes.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
    <p-toolbar styleClass="align-items-center m-2 p-3 h-5rem">
      <div class="p-toolbar-group-start">
        <i class="text-primary pi pi-prime" style="font-size: 1.8rem"></i>
        <h2 class="cursor-pointer mr-4 text-primary" routerLink="/">
          Anima Blog
        </h2>
      </div>
      <div class="p-toolbar-group-end">
        <div class="flex gap-2">
          <h3 class="text-primary">Categorias</h3>
          <p-dropdown
            [options]="genres$"
            [(ngModel)]="genresSelected"
            optionLabel="name"
          ></p-dropdown>
        </div>
      </div>
    </p-toolbar>
  `,
})
export class HeaderComponent implements OnInit {
  private animesService = inject(AnimesService);

  genresSelected!: any;

  genres$!: any[];

  ngOnInit() {
    this.animesService.getAnimesByGenreSubscription();

    this.animesService.genres$.subscribe((data) => {
      console.log(data);
      this.genres$ = data;
    });
  }
}
