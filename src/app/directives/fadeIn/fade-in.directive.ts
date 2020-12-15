import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {

    constructor(private eRef: ElementRef) {
    this.defineDirective();
  }

  defineDirective(){
    this.eRef.nativeElement.style.opacity = '0';

    setInterval(
      () => {
        this.eRef.nativeElement.style.opacity = '1';
      });
  }
}
