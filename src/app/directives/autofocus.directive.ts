import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    // Otherwise Angular throws error: Expression has changed after it was checked.
    window.setTimeout(() => {
      this.el.nativeElement.focus();
    });
  }

}
