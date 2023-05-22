import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {

  public dynamicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.formBuilder.array([
      ["Assassin's Creed II", Validators.required],
      ["Ark Survival Evolved", Validators.required] 
    ])
  })

  public newFavourite: FormControl = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) {}

  get favouriteGames() {
    return this.dynamicForm.get("favouriteGames") as FormArray;
  }

  isValidField(field: string): boolean | null {
    return ((this.dynamicForm.controls[field].errors) && (this.dynamicForm.controls[field].touched));
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return ((formArray.controls[index].errors) && (formArray.controls[index].touched));
  } 

  getFieldError(field: string): string | null {
    if((!this.dynamicForm.controls[field]) && (this.dynamicForm.controls[field].errors)) {
      return null;
    }

    const errors = this.dynamicForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Este campo debe tener ${errors['minlength'].requiredLength} caracteres como mínimo`;
      }
    }

    return null;
  }

  onAddToFavourites(): void {
    if(this.newFavourite.invalid) {
      return;
    }

    const newGame = this.newFavourite.value;

    this.favouriteGames.push(this.formBuilder.control(newGame, Validators.required));
    
    this.newFavourite.reset();
  }

  onDeleteFavourite(index: number): void {
    this.favouriteGames.removeAt(index);
  }

  onSubmit(): void {
    if(this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.dynamicForm.value);
    (this.dynamicForm.controls['favouriteGames'] as FormArray) = this.formBuilder.array([]);
    this.dynamicForm.reset();
  }

}
