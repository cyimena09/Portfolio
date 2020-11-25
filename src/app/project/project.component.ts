import { Component, OnInit } from '@angular/core';
import ScrollTrigger from '@terwanerik/scrolltrigger'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onScrolling();
  }

  onScrolling(){
    const trigger = new ScrollTrigger();
    trigger.add('[slideInRight]');
    trigger.add('[slideInLeft]');
  }

}
