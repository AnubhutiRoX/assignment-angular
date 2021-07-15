import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simpl test', 'http://localhost:4200/assets/Recipe.png'),
    new Recipe('A Test Recipe', 'This is a simpl test', 'http://localhost:4200/assets/Recipe.png')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
