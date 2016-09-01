import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

export * from "./DropdownNotClosableZone";
export * from "./Dropdown";
export * from "./DropdownOpen";

import {DropdownNotClosableZone} from "./DropdownNotClosableZone";
import {Dropdown} from "./Dropdown";
import {DropdownOpen} from "./DropdownOpen";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DropdownNotClosableZone,
        Dropdown,
        DropdownOpen,
    ],
    exports: [
        DropdownNotClosableZone,
        Dropdown,
        DropdownOpen,
    ]
})
export class DropdownModule {

}