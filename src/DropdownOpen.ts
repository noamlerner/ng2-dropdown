import {Directive, ElementRef, OnDestroy, Host, HostListener} from "@angular/core";
import {Dropdown} from "./Dropdown";

@Directive({
    selector: "[dropdown-open]"
})
export class DropdownOpen implements OnDestroy {

    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------

    private justOpened: boolean = false;
    private closeDropdownOnOutsideClick = (event: MouseEvent) => this.close(event);

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(@Host() public dropdown: Dropdown,
                private elementRef: ElementRef) {
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    @HostListener("click")
    openDropdown() {
        if (this.justOpened) return;

        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        } else {
            this.dropdown.open();
            document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    }

    @HostListener("focus")
    onFocus() {
        this.justOpened = true;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
        setTimeout(() => this.justOpened = false, 10); // this hack is needed for dropdown not to open and instantly closed
    }

    @HostListener("blur", ["$event"])
    onBlur(event: FocusEvent) {
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(<HTMLElement> event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {

            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    }

    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------

    ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick);
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private close(event: Event) {
        if (!this.dropdown.isInClosableZone(<HTMLElement> event.target) && event.target !== this.elementRef.nativeElement) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    }

}
