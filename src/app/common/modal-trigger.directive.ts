import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId;
  private elem: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any, elem: ElementRef) {
    this.elem = elem.nativeElement;
  }

  ngOnInit() {
    this.elem.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
