import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input()
  tooltip!: string;

  private tooltipObject: any;

  constructor(private element: ElementRef) { }


  ngOnDestroy(): void {
     if (this.tooltipObject) { this.tooltipObject.remove() }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.tooltip!=null && this.tooltip!=""){
      let x = this.element.nativeElement.getBoundingClientRect().left + this.element.nativeElement.offsetWidth / 2;
      let y = this.element.nativeElement.getBoundingClientRect().top + this.element.nativeElement.offsetHeight + 6;
      let popup = document.createElement('div');
      popup.innerHTML = this.tooltip;

      popup.style.textAlign="center";
      popup.style.position="fixed";
      popup.style.padding="6px 12px";
      popup.style.borderRadius="10px";
      popup.style.width="auto";
      popup.style.background="#696969";
      popup.style.transform="translate(-50%, -30%)";


      popup.style.top = y.toString() + "px";
      popup.style.left = x.toString() + "px";
      document.body.appendChild(popup);
      this.tooltipObject = popup;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipObject) { this.tooltipObject.remove() }
  }



}
