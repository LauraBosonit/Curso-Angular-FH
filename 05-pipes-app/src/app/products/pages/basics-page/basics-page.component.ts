import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  nameLower: string = "valki";
  nameUpper: string = "VALKI";
  fullName: string = "VaLKi";

  currentDate: Date = new Date();
}
