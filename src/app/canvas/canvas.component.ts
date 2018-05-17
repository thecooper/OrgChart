import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CanvasService, Point } from '../canvas.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild("canvas") Canvas : ElementRef;
  
  private Lines : [Point, Point][] = [];
  
  constructor(private _canvasService : CanvasService) { }

  ngOnInit() {
    // console.log(this._canvasService.LinePoints);
    this._canvasService.LinePoints
      .subscribe(points=> {
        this.Lines.push(points);
        console.log("Points: ", points);
        // console.log("Drew a line from (" + points[0].x + ", " + points[0].y + ") to (" + points[1].x + ", " + points[1].y + ")");
      });
    }
    
    ngAfterViewChecked() {
      console.log(`Attempting to draw ${this.Lines.length} lines`);
      console.log()
      let context = this.Canvas.nativeElement.getContext("2d");
      console.log(context);
      context.beginPath();
      this.Lines.forEach(points => {
        context.moveTo(points[0].x, points[1].y);
        context.lineTo(points[0].x, points[1].y);
      })
      context.stroke();
  }
}
