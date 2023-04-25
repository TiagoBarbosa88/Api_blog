import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/models/post';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: any = {}
  id!: string | null
  idSubscription!: Subscription
  genres: any[] =[]


  constructor(private animeService: AnimesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')

      this.animeService.getAnimesById(this.id).
      subscribe((data) => {
          this.anime = data.data;
          console.log(data);
      })
    })

  }

}
