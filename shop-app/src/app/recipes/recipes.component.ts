import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // all child will now use the same instance of recipeService
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
