import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent implements OnInit {
  public switchesForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.switchesForm.reset(this.person);
  }

  getFieldError(field: string): string | null {
    if ((!this.switchesForm.controls[field]) && (this.switchesForm.controls[field].errors)) {
      return null;
    }

    const errors = this.switchesForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Este campo debe tener ${errors['minlength'].requiredLength} caracteres como mínimo`;
      }
    }

    return null;
  }

  isValidField(field: string): boolean | null {
    return ((this.switchesForm.controls[field].errors) && (this.switchesForm.controls[field].touched));
  }


  onSave() {
    if (this.switchesForm.invalid) {
      this.switchesForm.markAllAsTouched();
      return;
    }

    

    const { termsAndConditions, ...newPerson } = this.switchesForm.value;

    this.person = newPerson;

    console.log(this.switchesForm.value);0

    // this.switchesForm.reset();
  }
}
