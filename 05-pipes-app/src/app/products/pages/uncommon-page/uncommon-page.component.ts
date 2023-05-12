import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //18nSelect
  public name: string = 'Laura';
  public gender: 'male'|'female' = 'female';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Flavio';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['Laura', 'Flavio', 'Daniel', 'Ángeles', 'Antonio', 'Marta', 'Gabriela'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Laura',
    age: 36,
    addres: 'Jaén, España'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(tap( value => console.log('tap:', value)));

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  })

}
