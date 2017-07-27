import {Directive, ElementRef, Renderer, Input } from '@angular/core'

@Directive({selector : '[myHidden]'})

export class HiddenDirective{

  constructor(public el:ElementRef, public renderer:Renderer){}

  @Input() myHidden : boolean;

  ngOnInit(){
    console.log(this.myHidden)

    if(this.myHidden) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
