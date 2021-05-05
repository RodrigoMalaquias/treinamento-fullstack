import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundcolor = this.highlightColor;
    this.color = 'white';
    this.textAlign = 'center';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundcolor = this.defaultColor;
    this.color = 'black';
    this.textAlign = 'left';
  }

  @HostBinding('style.backgroundColor') backgroundcolor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.text-align') textAlign: string;

  @Input() defaultColor: string = "white";
  @Input() highlightColor: string = "red";

  constructor() { }

}
