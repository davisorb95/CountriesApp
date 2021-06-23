import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  
  term: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime( 300 ))
      .subscribe(( term ) => this.onDebounce.emit( term ));
  }

  search(): void {
    this.onEnter.emit( this.term );
  }

  keyUp(): void {
    this.debouncer.next( this.term );
  }

}
