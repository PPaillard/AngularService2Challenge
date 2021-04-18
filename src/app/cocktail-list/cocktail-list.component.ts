import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../common/Cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[];

  public service: CocktailService;

  constructor(cocktailService: CocktailService) {
    this.service = cocktailService;
  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe((params: Cocktail[]) => {
      this.cocktails = params;
    });
  }
}
