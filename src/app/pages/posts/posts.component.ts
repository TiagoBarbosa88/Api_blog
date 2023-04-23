import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../../shared/services/animes.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {
  animes: any;


  constructor(private animesService: AnimesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.animesService.getAllAnimes().subscribe((data) => {
      if (data && data.data) {
        this.animes = data.data;
        console.log(this.animes);
      } else {
        console.log('Não foi possível encontrar a chave "data" na resposta da API.');
      }
   /*    console.log(data);
      console.log(this.animes); */
    })



  }

  /*     const id = this.route.snapshot.paramMap.get(id).toString();
      this.animesService.getAnimesById(Number(id)).subscribe(data => {
        this.animes = data
        console.log(this.animes);
      })
   */

}

