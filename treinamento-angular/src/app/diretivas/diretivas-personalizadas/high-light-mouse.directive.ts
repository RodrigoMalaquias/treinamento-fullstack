import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highLightMouse]'
})
export class HighLightMouseDirective {

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
 
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {

  }

}
