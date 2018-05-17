import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Person } from '../person';
import { CanvasService, Point } from '../canvas.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() Person : Person;
  
  constructor(private elRef : ElementRef, private _canvasService : CanvasService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log("In PersonComponent.ngAfterViewInit()"); 
  }

  drawLineBetweenPeople(personComponent:PersonComponent) {
    this._canvasService.DrawLineSegment(this.getPersonCenterPoint(), personComponent.getPersonCenterPoint());
  }

  getPersonCenterPoint() : Point {
    let rect = this.elRef.nativeElement.getBoundingClientRect();

    let x = rect.left + (rect.width / 2);
    let y = rect.top + (rect.height / 2);

    return new Point(x, y);
  }
}
