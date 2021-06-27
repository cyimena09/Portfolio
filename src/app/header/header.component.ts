import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.onScroll();
  }

  onNavigate(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

  onScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
      } else {
        document.getElementById('header').style.top = '-70px';
      }
      prevScrollpos = currentScrollPos;
    };
  }

  onSubMenu() {
    let subMenu = document.getElementById('blacked');
    subMenu.style.display === 'none' || subMenu.style.display === '' ? subMenu.style.display = 'flex' : subMenu.style.display = 'none';
  }

  onLoadCv() {
    window.open('/assets/cv/emile_cyimena_cv_pdf.pdf', '_blank');
  }

}
