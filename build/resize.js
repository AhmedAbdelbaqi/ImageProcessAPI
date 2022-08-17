"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const delete_1 = __importDefault(require("./delete"));
const resizeFunc = (srcimagepath, thumbpath, srcimageName, width, height, deletecmd) => __awaiter(void 0, void 0, void 0, function* () {
    const resimagname = `${srcimageName}_${width}_${height}`;
    try {
        yield fs_1.promises.access(`${thumbpath}${resimagname}.jpg`, fs_1.constants.F_OK);
        console.log("Already Exists");
    }
    catch (error) {
        const save = yield (0, sharp_1.default)(`${srcimagepath}${srcimageName}.jpg`).resize(width, height);
        yield save.toFile(`${thumbpath}${resimagname}.jpg`);
    }
    // Delete
    if (deletecmd) {
        yield (0, delete_1.default)(srcimageName, resimagname);
    }
    return `/.${thumbpath}${resimagname}.jpg`;
});
exports.default = resizeFunc;
