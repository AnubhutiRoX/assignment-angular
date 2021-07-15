export class Recipe {
    // Blue print of the object. define how the recipe to look like.
    // should be publically available
    public name: string;
    public description: string;
    public imagePath: string;
    
    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}