import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;
  
  //El $ se utilioza para saber que es una variable de un observable
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log("ComponenteHijo: ngOnInit");
    
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ComponenteHijo: ngOnChanges");
    
    console.log({ComponenteHijo: changes});
  }

  ngOnDestroy(): void {
    console.log("ComponenteHijo: ngOnDestroy");
    this.interval$?.unsubscribe();
  }



}
