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
exports.thumbpath = exports.resizeFunc = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./resize"));
exports.resizeFunc = resize_1.default;
const path_1 = __importDefault(require("path"));
const healthCheck_1 = __importDefault(require("./healthCheck"));
const delete_1 = __importDefault(require("./delete"));
const imgsrc = "./images/full/";
const thumbpath = "./images/thumb/";
exports.thumbpath = thumbpath;
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
app.get("/image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const width = parseInt(req.query.width);
        const height = parseInt(req.query.height);
        const imageName = req.query.filename;
        const deletecheck = req.query.delete;
        if (deletecheck) {
            yield (0, delete_1.default)(imageName);
            const retpath = yield (0, resize_1.default)(imgsrc, thumbpath, imageName, width, height);
        }
        const retpath = yield (0, resize_1.default)(imgsrc, thumbpath, imageName, width, height);
        yield res.sendFile(path_1.default.join(__dirname + retpath));
    }
    catch (e) {
        const errorMessage = e.message;
        res.send(errorMessage);
        console.log(errorMessage);
    }
}));
// Healthcheck endpoint
app.use("/", healthCheck_1.default);
app.get("/delete", (req, res) => {
    (0, delete_1.default)("fjord");
});
app.listen(port, () => {
    console.log(`Listento Port ${port}`);
});
