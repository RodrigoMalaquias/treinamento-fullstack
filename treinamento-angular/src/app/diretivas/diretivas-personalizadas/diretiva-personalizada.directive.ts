import { Directive , ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[fundoVermelho]' // ou selector: 'p[fundoVermelho]'
})
export class DiretivaPersonalizadaDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    //console.log(this._elementRef)
    /* Isso causa vulnelabilidade por alterar o valor da tag P do DOM
    this._elementRef.nativeElement.style.backgroundColor = 'red';
    this._elementRef.nativeElement.style.textAlign = 'center';
    */

    _renderer.setStyle(this._elementRef.nativeElement, 'background-color',' red');
    _renderer.setStyle(this._elementRef.nativeElement, 'color',' white');
    _renderer.setStyle(this._elementRef.nativeElement, 'text-align',' center');
   }

}
