import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonrendu]'
})
export class NonrenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='red'
    el.nativeElement.style.border='5px dashed red'
    el.nativeElement.style.padding='10px;'
   }

}
