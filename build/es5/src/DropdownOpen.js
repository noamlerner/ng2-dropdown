"use strict";
var core_1 = require("@angular/core");
var Dropdown_1 = require("./Dropdown");
var DropdownOpen = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function DropdownOpen(dropdown, elementRef) {
        var _this = this;
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        /**
         * This hack is needed for dropdown not to open and instantly closed
         */
        this.openedByFocus = false;
        this.closeDropdownOnOutsideClick = function (event) { return _this.close(event); };
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.openDropdown = function () {
        if (this.dropdown.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
        else {
            this.dropdown.open();
            document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    DropdownOpen.prototype.dropdownKeydown = function (event) {
        if (event.keyCode === 40) {
            this.openDropdown();
        }
    };
    DropdownOpen.prototype.onFocus = function () {
        if (!this.dropdown.activateOnFocus)
            return;
        this.openedByFocus = true;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpen.prototype.onBlur = function (event) {
        if (!this.dropdown.activateOnFocus)
            return;
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    };
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.ngOnDestroy = function () {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.close = function (event) {
        if (!this.dropdown.isInClosableZone(event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    };
    DropdownOpen.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[dropdown-open]"
                },] },
    ];
    /** @nocollapse */
    DropdownOpen.ctorParameters = [
        { type: Dropdown_1.Dropdown, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ];
    DropdownOpen.propDecorators = {
        'openDropdown': [{ type: core_1.HostListener, args: ["click",] },],
        'dropdownKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
        'onFocus': [{ type: core_1.HostListener, args: ["focus",] },],
        'onBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    };
    return DropdownOpen;
}());
exports.DropdownOpen = DropdownOpen;
//# sourceMappingURL=DropdownOpen.js.map