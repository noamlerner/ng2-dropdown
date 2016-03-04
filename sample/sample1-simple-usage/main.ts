import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {DROPDOWN_DIRECTIVES} from "../../src/ng2-dropdown";

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
    
</div>
`,
    directives: [DROPDOWN_DIRECTIVES]
})
export class Sample1App {

}

bootstrap(Sample1App);