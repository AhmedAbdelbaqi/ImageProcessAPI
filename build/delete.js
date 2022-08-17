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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const index_1 = require("./index");
const Delete = (imageName, exceptionimag) => __awaiter(void 0, void 0, void 0, function* () {
    const Files = yield fs_1.promises.readdir(index_1.thumbpath);
    Files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
        if (file.includes(imageName) && file !== `${exceptionimag}.jpg`) {
            console.log(file);
            console.log(exceptionimag);
            yield fs_1.promises.unlink(`${index_1.thumbpath}${file}`);
        }
    }));
});
exports.default = Delete;
