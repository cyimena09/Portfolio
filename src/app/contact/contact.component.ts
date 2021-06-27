import {Component, OnInit} from '@angular/core';
import ScrollTrigger from '@terwanerik/scrolltrigger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.onScrolling();
  }

  onScrolling() {
    const trigger = new ScrollTrigger();
    trigger.add('[fadeIn]');
  }

}
