import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import ScrollTrigger from '@terwanerik/scrolltrigger';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  message;
  actualDate = new Date();

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.onScrolling();
    this.getMomentOfTheDay();
  }

  onNavigate(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

  onScrolling() {
    const trigger = new ScrollTrigger();
    trigger.add('[fadeIn]');
  }

  getMomentOfTheDay() {
    if (this.actualDate.getHours() > 6 && this.actualDate.getHours() < 12) {
      this.message = 'une excellente matinée';
    } else if (this.actualDate.getHours() === 12) {
      this.message = 'un excellent midi';
    } else if (this.actualDate.getHours() > 12 && this.actualDate.getHours() < 18) {
      this.message = 'un excellent après-midi';
    } else {
      this.message = 'une excellente soirée';
    }
  }

}
