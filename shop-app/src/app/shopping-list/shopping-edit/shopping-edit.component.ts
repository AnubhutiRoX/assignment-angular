import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editedtemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedtemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  };

  
  onSubmitItem(f: NgForm) {
    const value = f.value;
    const ingredientAdded = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedtemIndex, ingredientAdded)      
    } else {
      this.slService.addIngredient(ingredientAdded);
    }
    this.editMode = false;
    f.reset();
  }
  reset() {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.slService.deleteIngredient(this.editedtemIndex);
    this.reset();
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
