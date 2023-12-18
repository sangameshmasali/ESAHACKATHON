import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[numericOnly]'
})
export class IntergersDirective {

    @Input()
    allowSignedDecimalTemperatureValue: string = 'F';

    @Input()
    disabenegative: boolean = false;

    @Input()
    disabefloat: boolean = false;

    @Input()
    allowplus: boolean = false;

    @Input()
    allowDecimal: boolean = false;

    @Input()
    allowSignedDecimal: boolean = false;
    @Input()
    allowTwoDecimal: boolean = false;
    @Input()
    doNotAllowSpace: boolean = false;
    @Input()
    specialCharNotAllow: Boolean = false;

    mouseselectedText: boolean = false;
    selectedText: string = '';
    private regex: RegExp = new RegExp("^[0-9]*$");

    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    private mouseselectKey: Array<string> = ['select'];
    constructor(private element: ElementRef) { }
    @HostListener('select', ['$event'])
    onSelect(event: any) {
        if (this.mouseselectKey.indexOf(event.type) !== -1) {
            this.mouseselectedText = true;
            this.selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
            return;
        }
    }
    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {

        if (this.disabefloat || this.disabenegative)
            this.regex = new RegExp(/(?!00)^(?:0|[0-9]\d{0,2})$/);
        if (this.allowplus)
            this.regex = new RegExp(/^\+\d*\.?\d{0,2}$/g);
        if (this.allowDecimal)
            this.regex = new RegExp(/^\d*\.?\d{0,5}$/g);
        if (this.allowSignedDecimal)
            this.regex = new RegExp(/^-?\d*\.?\d{0,8}$/g);
        if (this.allowTwoDecimal)
            this.regex = new RegExp(/^\d*\.?\d*\.?\d{0,25}$/g);
        if (this.doNotAllowSpace)
            this.regex = new RegExp(/^\s/);
        if (this.specialCharNotAllow)
            this.regex = new RegExp(/^[0-9a-zA-Z\_]+$/);
        if (this.specialKeys.indexOf(e.key) !== -1) {
            return;
        }
        let current: string = this.element.nativeElement.value;
        const position = this.element.nativeElement.selectionStart;
        const next: string = [current.slice(0, position), e.key == 'Decimal' ? '.' : e.key, current.slice(position)].join('');
        const entrytext: string = e.key;
        if (this.mouseselectedText && (current == this.selectedText)) {
            if (!String(entrytext).match(this.regex)) {
                e.preventDefault();
            }
        }
        else if (next && !String(next).match(this.regex)) {
            e.preventDefault();
        }
    }
}


