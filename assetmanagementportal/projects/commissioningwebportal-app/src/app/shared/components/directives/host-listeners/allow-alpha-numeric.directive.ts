import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[allowAlphaNumeric]'
})
export class AllowAlphaNumericDirective {
  regExpStr='^[a-zA-Z0-9 -]';


  constructor() { }

  @HostListener('keypress', ['$event'])
    onKeyPress(e: KeyboardEvent) {
      return new RegExp(this.regExpStr).test(e.key);     
    }

    @HostListener('paste', ['$event'])
    blockPaste(e: ClipboardEvent) {
      e.preventDefault();    
    }

}
