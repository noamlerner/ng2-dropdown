"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var index_1 = require("../../src/index");
var Sample1App = (function () {
    function Sample1App() {
    }
    Sample1App.prototype.printOpening = function () {
        console.log("opened!");
    };
    Sample1App.prototype.printClosing = function () {
        console.log("closed!");
    };
    Sample1App.prototype.select = function () {
        console.log("selected");
    };
    Sample1App.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app",
                    template: "\n<div class=\"container\">\n\n    <!-- a-style dropdown -->\n    <div class=\"dropdown\" dropdown>\n        <a href=\"#\" dropdown-open>My Heroes</a>\n        <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" (click)=\"select()\">Badman</a></li>\n            <li><a href=\"#\">Sadman</a></li>\n            <li><a href=\"#\">Lieman</a></li>\n        </ul>\n    </div>\n    <br/>\n    \n    <!-- button dropdown -->\n    <div class=\"dropdown\" dropdown>\n        <button class=\"btn btn-primary\" dropdown-open>My Heroes</button>\n        <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" (click)=\"select()\">Badman</a></li>\n            <li><a href=\"http://google.com\">Sadman</a></li>\n            <li><a href=\"#\">Lieman</a></li>\n        </ul>\n    </div>\n    <br/>\n    \n    <!-- dropdown with items that are not closing dropdown when you click on them -->\n    <div class=\"dropdown\" dropdown>\n        <button class=\"btn btn-primary\" dropdown-open>Not closable on items click</button>\n        <ul class=\"dropdown-menu\" dropdown-not-closable-zone>\n            <li><a href=\"#\">This dropdown will</a></li>\n            <li><a href=\"#\">not be closed when you</a></li>\n            <li><a href=\"#\">select any its items</a></li>\n            <li><a href=\"#\">this allows you to put</a></li>\n            <li><a href=\"#\">dynamic content into it</a></li>\n        </ul>\n    </div>\n    <br/>\n    \n    <!-- dropdown that can listen to events -->\n    <div class=\"dropdown\" dropdown (onOpen)=\"printOpening()\" (onClose)=\"printClosing()\">\n        <button class=\"btn btn-primary\" dropdown-open>Click and checkout console</button>\n        <ul class=\"dropdown-menu\" [dropdown-not-closable-zone]=\"false\">\n            <li><a href=\"#\">Check console - it has onOpen and onClose events!</a></li>\n            <li><a href=\"#\">Also this dropdown can be closed</a></li>\n            <li><a href=\"#\">even it uses a dropdown-not-closable-zone</a></li>\n            <li><a href=\"#\">because dropdown-not-closable-zone is set to false</a></li>\n            <li><a href=\"#\">this way you can control your closable zone.</a></li>\n        </ul>\n    </div>\n\n    <!-- dropdown that can be activated on focus -->\n    <div class=\"dropdown\" dropdown>\n        <button dropdown-open><a>My Heroes</a></button>\n        <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Badman</a></li>\n            <li><a href=\"#\">Sadman</a></li>\n            <li><a href=\"#\">Lieman</a></li>\n        </ul>\n    </div>\n    <br/>\n    \n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Sample1App.ctorParameters = [];
    return Sample1App;
}());
exports.Sample1App = Sample1App;
var Sample1Module = (function () {
    function Sample1Module() {
    }
    Sample1Module.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        platform_browser_1.BrowserModule,
                        index_1.DropdownModule
                    ],
                    declarations: [
                        Sample1App
                    ],
                    bootstrap: [
                        Sample1App
                    ]
                },] },
    ];
    /** @nocollapse */
    Sample1Module.ctorParameters = [];
    return Sample1Module;
}());
exports.Sample1Module = Sample1Module;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Sample1Module);
//# sourceMappingURL=main.js.map