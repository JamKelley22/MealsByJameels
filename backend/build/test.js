"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
exports.test = app;
app.listen("/", function () {
    console.log("test");
});
