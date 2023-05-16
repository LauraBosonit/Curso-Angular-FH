import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    switch(sortBy) {
      case 'name':
        return heroes.sort((hero1, hero2) => (hero1.name > hero2.name) ? 1 : -1);
      case 'canFly':
        return heroes.sort((hero1, hero2) => (hero1.canFly > hero2.canFly) ? 1 : -1);
      case 'color': 
        return heroes.sort((hero1, hero2) => (hero1.color > hero2.color) ? 1 : -1);
      default:
        return heroes;
    }
  }

}
