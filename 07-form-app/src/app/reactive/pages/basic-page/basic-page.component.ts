import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  // public basicForm: FormGroup = new FormGroup({
  //   name: new FormControl("", [], []),
  //   price: new FormControl(0, [], []),
  //   stock: new FormControl(0, [],   [])
  // });

  constructor(private formBuilder: FormBuilder) {}

  public basicForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]]
  });

  isValidField(field: string): boolean | null {
    return ((this.basicForm.controls[field].errors) && (this.basicForm.controls[field].touched));
  }

  getFieldError(field: string): string | null {
    if((!this.basicForm.controls[field]) && (this.basicForm.controls[field].errors)) {
      return null;
    }

    const errors = this.basicForm.controls[field].errors || {};

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

  onSave() {
    if(this.basicForm.invalid) {
      return;
    }

    console.log(this.basicForm.value);
    
    this.basicForm.reset({ price: 0, stock: 0 })
  }

}
