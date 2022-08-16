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
exports.resizeFunc = exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import {promises as fs} from 'fs';
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
let imgsrc = './images/full/';
let thumbpath = './images/thumb/';
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
const resizeFunc = (srcimagepath, thumbpath, imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const save = yield (0, sharp_1.default)(`${srcimagepath}${imageName}.jpg`).resize(width, height);
    yield save.toFile(`${thumbpath}${imageName}.jpg`);
    return `/.${thumbpath}${imageName}.jpg`;
});
exports.resizeFunc = resizeFunc;
app.get('/image', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let width = parseInt((req.query.width));
        let height = parseInt((req.query.height));
        let imageName = req.query.filename;
        const retpath = yield resizeFunc(imgsrc, thumbpath, imageName, width, height);
        yield res.sendFile(path_1.default.join(__dirname + retpath));
        console.log("Resize Done ");
    }
    catch (Error) {
        res.send(Error.message);
        console.log(Error.message);
    }
}));
app.listen(port, (() => { console.log(`Listento Port ${port}`); }));
