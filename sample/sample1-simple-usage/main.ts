import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {DROPDOWN_DIRECTIVES} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- a-style dropdown -->
    <div class="dropdown" dropdown>
        <a dropdown-open>My Heroes</a>
        <ul class="dropdown-menu">
            <li><a>Badman</a></li>
            <li><a>Sadman</a></li>
            <li><a>Lieman</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- button dropdown -->
    <div class="dropdown" dropdown>
        <button class="btn btn-primary" dropdown-open>My Heroes</button>
        <ul class="dropdown-menu">
            <li><a>Badman</a></li>
            <li><a>Sadman</a></li>
            <li><a>Lieman</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- dropdown with items that are not closing dropdown when you click on them -->
    <div class="dropdown" dropdown>
        <button class="btn btn-primary" dropdown-open>Not closable on items click</button>
        <ul class="dropdown-menu" dropdown-not-closable-zone>
            <li><a>This dropdown will</a></li>
            <li><a>not be closed when you</a></li>
            <li><a>select any its items</a></li>
            <li><a>this allows you to put</a></li>
            <li><a>dynamic content into it</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- dropdown that can listen to events -->
    <div class="dropdown" dropdown (onOpen)="printOpening()" (onClose)="printClosing()">
        <button class="btn btn-primary" dropdown-open>Click and checkout console</button>
        <ul class="dropdown-menu" [dropdown-not-closable-zone]="false">
            <li><a>Check console - it has onOpen and onClose events!</a></li>
            <li><a>Also this dropdown can be closed</a></li>
            <li><a>even it uses a dropdown-not-closable-zone</a></li>
            <li><a>because dropdown-not-closable-zone is set to false</a></li>
            <li><a>this way you can control your closable zone.</a></li>
        </ul>
    </div>
    
</div>
`,
    directives: [DROPDOWN_DIRECTIVES]
})
export class Sample1App {

    printOpening() {
        console.log("opened!");
    }

    printClosing() {
        console.log("closed!");
    }

}

bootstrap(Sample1App);