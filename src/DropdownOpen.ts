import {Directive, ElementRef, OnDestroy, Host, HostListener} from "angular2/core";
import {Dropdown} from "./Dropdown";

@Directive({
    selector: "[dropdown-open]"
})
export class DropdownOpen implements OnDestroy {

    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------

    private closeDropdownOnOutsideClick = (event: MouseEvent) => {
        if (!this.dropdown.isInClosableZone(<HTMLElement> event.target) && event.target !== this.elementRef.nativeElement) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    };

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(@Host() public dropdown: Dropdown,
                private elementRef: ElementRef) {
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    @HostListener('click')
    openDropdown() {
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick);
    }

}
