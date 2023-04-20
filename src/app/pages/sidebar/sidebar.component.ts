import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../../shared/services/animes.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  animes: any


  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {

    this.animesService.getRecomends().subscribe((data) => {
      if (data && data.data) {
        this.animes = data.data;
        console.log(this.animes)
      } else {
        console.log('Não achou')
      }
    })
  }
}
