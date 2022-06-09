import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test','https://loseweightbyeating.com/wp-content/uploads/2021/03/AdobeStock_318489431-scaled.jpeg?ezimgfmt=ng:webp/ngcb1'),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://loseweightbyeating.com/wp-content/uploads/2021/03/AdobeStock_318489431-scaled.jpeg?ezimgfmt=ng:webp/ngcb1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
