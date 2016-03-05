import {Directive, ElementRef, ContentChild, Output, EventEmitter} from "angular2/core";
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

    @Output()
    onOpen = new EventEmitter();

    @Output()
    onClose = new EventEmitter();

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
        this.onOpen.emit(undefined);
    }

    close() {
        const element: HTMLElement = this.elementRef.nativeElement;
        element.classList.remove("open");
        this.onClose.emit(undefined);
    }

    isInClosableZone(element: HTMLElement) {
        if (!this.notClosableZone)
            return false;

        return this.notClosableZone.contains(element);
    }

}