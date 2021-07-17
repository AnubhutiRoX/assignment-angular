import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this is required because after addition I wasnt having this.ingredients but a copy of it from getIngredients()
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // lot of events emitted
        // for (let ingredient of this.ingredients) {
        //     this.addIngredient(ingredient)
        // }

        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients);
    }
}