import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService:ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe("1", 'Veg Burger', 'Freshly prepared', 'http://localhost:4200/assets/Recipe.png', [
          new Ingredient('Veggie', 1),
          new Ingredient('French Fries', 1)
        ]),
        new Recipe("2", 'A Test Recipe', 'This is a simpl test', 'http://localhost:4200/assets/Recipe.png', [
          new Ingredient('Meat', 1),
          new Ingredient('  Bread', 1)
        ])
      ];

    getRecipes(): Recipe[] {
      return this.recipes.slice(); // returns exact copy of recipes, not a reference
    }

    getRecipe(id: string): Recipe {
      return this.recipes.find(i => i.id === id); // returns exact copy of recipes, not a reference
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
    }
}