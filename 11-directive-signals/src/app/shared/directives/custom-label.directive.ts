import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle()
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log(value);
    this.setErrorMessage();
  }

  constructor(private element: ElementRef<HTMLElement>) {
    // console.log("Constructor de la directiva");
    // console.log(element);00
    this.htmlElement = element;
  }

  ngOnInit(): void {
    console.log("Directiva - NgOnInit");
    this.setStyle();
  }

  setStyle(): void {
    if(!this.htmlElement) {
      return;
    }

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if(!this.htmlElement) {
      return;
    }

    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);
    
    errors.forEach(error => {
      switch(error) {
        case "required":
          this.htmlElement!.nativeElement.innerText = "Este campo es obligatorio";
          break;
        case "minlength":
          const min = this._errors!['minlength']['requiredLength'];
          const current = this._errors!['minlength']['actualLength'];
          this.htmlElement!.nativeElement.innerText = `Mínimo ${current}/${min} caracteres.`;
          break;
        case "email":
          this.htmlElement!.nativeElement.innerText = "Se debe introducir un email  álido";
          break;
      }
    });

  }

}
