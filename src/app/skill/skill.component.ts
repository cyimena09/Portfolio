import {Component, OnInit} from '@angular/core';
import ScrollTrigger from '@terwanerik/scrolltrigger';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.onScrolling();
  }

  onScrolling() {
    const trigger = new ScrollTrigger({
      trigger: {
        once: true
      }
    });
    trigger.add('[slideInBottom]');
  }

}
