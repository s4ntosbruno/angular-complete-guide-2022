import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'strogonof da chandinha',
      'comida boa',
      'https://static.itdg.com.br/images/640-440/7e781068a839f15cdf1c85f18b3ea9d6/332854-original-1-1-.jpg'
    ),
  ];
}
