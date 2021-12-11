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
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
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
    if (this.isMobileDevice()) {
      window.open('/assets/cv/emile_cyimena_cv_pdf.pdf', '_blank');
    }
  }

  isMobileDevice() {
    return !!(navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i));
  }

}
