import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simpl test', 'http://localhost:4200/assets/Recipe.png'),
        new Recipe('A Test Recipe', 'This is a simpl test', 'http://localhost:4200/assets/Recipe.png')
      ];

    getRecipes() {
      return this.recipes.slice(); // returns exact copy of recipes, not a reference
    }
}