import {Directive, ElementRef, ContentChild} from "angular2/core";
import {DropdownNotClosableZone} from "./DropdownNotClosableZone";

@Directive({
    selector: "[dropdown]"
})
export class Dropdown {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    @ContentChild(DropdownNotClosableZone)
    notClosableZone: DropdownNotClosableZone;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private elementRef: ElementRef) {
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    open() {
        const element: HTMLElement = this.elementRef.nativeElement;
        element.classList.add("open");
    }

    close() {
        const element: HTMLElement = this.elementRef.nativeElement;
        element.classList.remove("open");
    }

    isInClosableZone(element: HTMLElement) {
        if (!this.notClosableZone)
            return false;

        return this.notClosableZone.contains(element);
    }

}