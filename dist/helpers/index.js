"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helpers;
(function (Helpers) {
    function isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
        try {
            item = JSON.parse(item);
        }
        catch (e) {
            return false;
        }
        if (typeof item === "object" && item !== null) {
            return true;
        }
        return false;
    }
    Helpers.isJson = isJson;
})(Helpers = exports.Helpers || (exports.Helpers = {}));
//# sourceMappingURL=index.js.map