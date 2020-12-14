"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASS = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.CERT_DIR = exports.PORT = void 0;
var env = process.env;
var envLoadError = function (envVar) {
    return "Could not load " + envVar + " env variable";
};
//=====Env consts=====
exports.PORT = process.env.PORT || 8080;
if (!exports.PORT)
    throw new Error(envLoadError("PORT")); //Should never error but for consistancy
exports.CERT_DIR = env.CERT_DIR;
if (!exports.CERT_DIR)
    throw new Error(envLoadError("CERT_DIR"));
exports.DB_HOST = env.DB_HOST;
if (!exports.DB_HOST)
    throw new Error(envLoadError("DB_HOST"));
exports.DB_PORT = Number(env.DB_PORT);
if (!exports.DB_PORT)
    throw new Error(envLoadError("DB_PORT"));
exports.DB_USER = env.DB_USER;
if (!exports.DB_USER)
    throw new Error(envLoadError("DB_USER"));
exports.DB_PASS = env.DB_PASS;
if (!exports.DB_PASS)
    throw new Error(envLoadError("DB_PASS"));
exports.DB_NAME = env.DB_NAME;
if (!exports.DB_NAME)
    throw new Error(envLoadError("DB_NAME"));
