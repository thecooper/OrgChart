import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() Person : Person;
  
  constructor(private elRef : ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log("In PersonComponent.ngAfterViewInit()"); 
  }
}
