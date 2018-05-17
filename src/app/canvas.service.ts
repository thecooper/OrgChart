import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CanvasService {
  LinePoints : Subject<[Point, Point]> = new Subject<[Point, Point]>();
  
  constructor() { }  
  
  DrawLineSegment(pointA : Point, pointB : Point) {
    // console.log("Canvas Service was asked to draw a line", pointA, pointB);
    this.LinePoints.next([pointA, pointB]);
  }
}

export class Point {
  x : number;
  y : number;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}
