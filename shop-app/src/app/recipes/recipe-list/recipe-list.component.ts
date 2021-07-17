import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  private firstObservable: Subscription;

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    const customObservable = Observable.create(observer => {
      let c = 0;
      setInterval(()=>{
        if (c===5) {
          observer.complete();
        }
        observer.next(c);
        c++;
      }, 1000);
    });
    customObservable.pipe(map(data => {
      return 'Log: ' + data; 
    })).subscribe(data=> {console.log(data)}, () => {}, () => console.log('completed'));
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    alert('Anubhuti');
    // to user relative route, i need to tell angular with activatedroute
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
