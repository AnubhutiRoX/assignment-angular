import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    // Blue print of the object. define how the recipe to look like.
    // should be publically available
    public id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]
    
    constructor(id: string, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}