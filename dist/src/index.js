"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cms = /** @class */ (function () {
    function Cms() {
    }
    Cms.prototype.printMe = function () {
        console.log('test');
    };
    return Cms;
}());
var cmsObj = new Cms();
exports.default = cmsObj;
