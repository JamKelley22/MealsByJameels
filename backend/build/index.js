"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // eslint-disable-line
var errorhandler_1 = __importDefault(require("errorhandler"));
var express_1 = __importDefault(require("express"));
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var config_1 = require("./config");
var Const = __importStar(require("./constants"));
// import { tops } from "controllers/tops";
var test_1 = require("./test");
// import { DEBUG } from "util/util";
var app = express_1.default();
app.use(config_1.config);
// app.use(tops);
app.use(test_1.test);
if (app.get("env") === "development") {
    //   DEBUG(true);
    var DEV_PORT = 4000;
    app.use(errorhandler_1.default());
    app.listen(DEV_PORT);
    console.log("Running a DEV API server at http://localhost:" + DEV_PORT); // eslint-disable-line
}
else {
    //   DEBUG(false);
    var key = fs_1.default.readFileSync(Const.CERT_DIR + "/privkey.pem");
    var cert = fs_1.default.readFileSync(Const.CERT_DIR + "/cert.pem");
    var options = {
        key: key,
        cert: cert,
    };
    var server = https_1.default.createServer(options, app);
    server.listen(Const.PORT, function () {
        console.log("Server starting on port: " + Const.PORT); // eslint-disable-line
    });
}
config_1.connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
