import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {DROPDOWN_DIRECTIVES} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- a-style dropdown -->
    <div class="dropdown" dropdown>
        <a href="#" dropdown-open>My Heroes</a>
        <ul class="dropdown-menu">
            <li><a href="#" (click)="select()">Badman</a></li>
            <li><a href="#">Sadman</a></li>
            <li><a href="#">Lieman</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- button dropdown -->
    <div class="dropdown" dropdown>
        <button class="btn btn-primary" dropdown-open>My Heroes</button>
        <ul class="dropdown-menu">
            <li><a href="#" (click)="select()">Badman</a></li>
            <li><a href="http://google.com">Sadman</a></li>
            <li><a href="#">Lieman</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- dropdown with items that are not closing dropdown when you click on them -->
    <div class="dropdown" dropdown>
        <button class="btn btn-primary" dropdown-open>Not closable on items click</button>
        <ul class="dropdown-menu" dropdown-not-closable-zone>
            <li><a href="#">This dropdown will</a></li>
            <li><a href="#">not be closed when you</a></li>
            <li><a href="#">select any its items</a></li>
            <li><a href="#">this allows you to put</a></li>
            <li><a href="#">dynamic content into it</a></li>
        </ul>
    </div>
    <br/>
    
    <!-- dropdown that can listen to events -->
    <div class="dropdown" dropdown (onOpen)="printOpening()" (onClose)="printClosing()">
        <button class="btn btn-primary" dropdown-open>Click and checkout console</button>
        <ul class="dropdown-menu" [dropdown-not-closable-zone]="false">
            <li><a href="#">Check console - it has onOpen and onClose events!</a></li>
            <li><a href="#">Also this dropdown can be closed</a></li>
            <li><a href="#">even it uses a dropdown-not-closable-zone</a></li>
            <li><a href="#">because dropdown-not-closable-zone is set to false</a></li>
            <li><a href="#">this way you can control your closable zone.</a></li>
        </ul>
    </div>

    <!-- dropdown that can be activated on focus -->
    <div class="dropdown" dropdown>
        <button dropdown-open><a>My Heroes</a></button>
        <ul class="dropdown-menu">
            <li><a href="#">Badman</a></li>
            <li><a href="#">Sadman</a></li>
            <li><a href="#">Lieman</a></li>
        </ul>
    </div>
    <br/>
    
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

    select() {
        console.log("selected");
    }

}

bootstrap(Sample1App);