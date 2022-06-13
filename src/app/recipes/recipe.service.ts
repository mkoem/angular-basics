import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test',
            'https://loseweightbyeating.com/wp-content/uploads/2021/03/AdobeStock_318489431-scaled.jpeg?ezimgfmt=ng:webp/ngcb1',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]),
        new Recipe('A Test Recipe 2',
            'This is simply a test 2',
            'https://loseweightbyeating.com/wp-content/uploads/2021/03/AdobeStock_318489431-scaled.jpeg?ezimgfmt=ng:webp/ngcb1',
            [new Ingredient('Banana', 1),
            new Ingredient('Apple', 2)])
    ];

    constructor(private shoppingListService: ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}