import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}
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
            [options]="cities"
            [(ngModel)]="selectedCity"
            optionLabel="name"
          ></p-dropdown>
        </div>
      </div>
    </p-toolbar>
  `,
})
export class HeaderComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
