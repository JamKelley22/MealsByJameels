"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Top = void 0;
var moment_1 = __importDefault(require("moment"));
var Top = /** @class */ (function () {
    function Top(data) {
        this.id = data.id;
        this.code = data.code;
        this.uri_image = data.uri_image;
        this.size = data.size;
        this.brand = data.brand;
        this.description = data.description;
        this.datetime_added = moment_1.default(data.datetime_added);
        this.datetime_last_modified = moment_1.default(data.datetime_last_modified);
        this.datetime_purchased = moment_1.default(data.datetime_purchased);
        this.item_condition = data.item_condition;
        this.type = data.type;
        this.status = data.status;
        this.number_of_wears = data.number_of_wears;
        this.wears_before_dirty = data.wears_before_dirty;
        this.wears_left_before_dirty = data.wears_left_before_dirty;
        this.primary_color = data.primary_color;
        this.secondary_color = data.secondary_color;
        this.accent_color = data.accent_color;
        this.pattern = data.patten;
    }
    return Top;
}());
exports.Top = Top;
