import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../../shared/services/animes.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  recomends: any


  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animesService.getRecomends().subscribe((data) => {
      if (data && data.data) {
        this.recomends = data.data;
        //console.log(this.recomends)
      } else {
        console.log('Não achou')
      }
    })
  }
}
