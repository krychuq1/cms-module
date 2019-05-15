"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Cms = /** @class */ (function () {
    function Cms(projectId) {
        this.projectId = projectId;
        this.url = 'https://translation-backend.sevenamstudio.com/api/content/' + projectId + '/';
    }
    Cms.prototype.getContent = function (type, name, language) {
        var url = this.url + type + '/' + name + '/' + language;
        return axios_1.default.get(url).then(function (data) {
            return data;
        }, function (error) {
            return error;
        });
    };
    return Cms;
}());
exports.Cms = Cms;
