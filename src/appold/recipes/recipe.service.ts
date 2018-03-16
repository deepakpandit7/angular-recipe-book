import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Crab fries', `Crab Fries
        To get great crab fries, use French fries with really good seasoning.`
        // tslint:disable-next-line:max-line-length
        , 'https://cooking-panda.s3-us-west-1.amazonaws.com/cp_prod/s3fs-public/styles/670x377/public/recipes/GarlicCrabFriesThumb4K.jpg?itok=_545tT3c',
        [
            new Ingredient('Crab meat', 1),
            new Ingredient('Potatoes', 2)
        ]),

        new Recipe('Prawn fries', `Prawn Fries
        To get great prawn fries, use French fries with really good seasoning.`
        , 'https://1.bp.blogspot.com/-pnO61A-SOHY/WG2nd9MV_VI/AAAAAAAACPo/BRAgSdrjFp4_fDAGzzijc1J-lADyuyl_gCLcB/s1600/Prawns%2BFry.JPG',
        [
            new Ingredient('Prawn meat', 1),
            new Ingredient('Potatoes', 2)
        ])

      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }
      
      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // tslint:disable-next-line:no-unused-expression
        this.slService.addIngredients(ingredients);
      }



}
