import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  constructor() {
    console.log('parent ctor');
  }
  ngAfterContentChecked(): void {
    console.log('parent ngAfterContentChecked');
    
  }
  ngAfterContentInit(): void {
    console.log('parent ngAfterContentInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit');
    
  }
  ngDoCheck(): void {
    console.log('parent docheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent onchanges');
  }

  ngOnInit(): void {
    console.log('parent init');
  }
}
