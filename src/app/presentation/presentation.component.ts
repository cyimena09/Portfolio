import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  message;
  actualDate = new Date();

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    if(this.actualDate.getHours() > 6 && this.actualDate.getHours() < 12){
      this.message = 'matinée';
    }
    else if(this.actualDate.getHours() > 12 && this.actualDate.getHours() < 18){
      this.message = 'après-midi';
    }
    else{
      this.message = 'soirée';
    }
  }

  onNavigate(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

}
