import { Component, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit  {

   constructor() {
    console.log('child ctor');
  }
  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked');
    
  }
  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit');
    
  }
  ngDoCheck(): void {
    console.log('child docheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child onchanges');
  }

  ngOnInit(): void {
    console.log('child init');
  }

}
