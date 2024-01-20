import { BehaviorSubject, Subject, first } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';

import { AnimesService } from 'src/app/shared/services/animes.service';

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
            (onChange)="getSelectedCategory()"
            [options]="genres$"
            [(ngModel)]="genresSelected"
            optionLabel="name"
          ></p-dropdown>
          <p-button
            (onClick)="listSelectedCategory()"
            icon="pi pi-search"
          ></p-button>
        </div>
      </div>
    </p-toolbar>
  `,
})
export class HeaderComponent implements OnInit {
  private animesService = inject(AnimesService);

  public genresSelected!: any;

  public genres$!: any[];

  public ngOnInit(): void {
    this.animesService.getAnimesByGenresSubscription();

    this.animesService.genres$.subscribe((data) => {
      this.genres$ = data;
    });
  }

  public getSelectedCategory(): number {
    const selected = this.genresSelected.mal_id;
    this.animesService.getSelectedCategory(selected);
    return selected;
  }

  public listSelectedCategory(): void {
    const id = this.getSelectedCategory();
    this.animesService.getAnimesByGenre(id).pipe(first()).subscribe();
  }
}
