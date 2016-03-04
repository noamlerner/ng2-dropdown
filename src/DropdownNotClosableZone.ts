import {Directive, ElementRef} from "angular2/core";

@Directive({
    selector: "[dropdown-not-closable-zone]"
})
export class DropdownNotClosableZone {

    constructor(private elementRef: ElementRef) {
    }

    contains(element: HTMLElement) {
        const thisElement: HTMLElement = this.elementRef.nativeElement;
        return thisElement.contains(element);
    }
}