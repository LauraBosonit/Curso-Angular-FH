import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSubscription?: Subscription;

  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(100)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  @ViewChild('searchInput')
  search!: ElementRef<HTMLInputElement>;

  emitValue() {
    this.onValue.emit(this.search.nativeElement.value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
