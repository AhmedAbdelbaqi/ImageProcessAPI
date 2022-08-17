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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
const request = (0, supertest_1.default)(index_1.app);
describe("Test of the request", () => {
    it("1. Test the Response ", () => __awaiter(void 0, void 0, void 0, function* () {
        const Response = yield request.get("/image");
        expect(Response.status).toBe(200);
    }));
    it("2. Resolve of Image resize ", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.resizeFunc)("./images/full/", "./images/thumb/", "fjord", 50, 50);
        expect(result).toEqual("/../images/thumb/fjord_50_50.jpg");
    }));
});
describe("Endpoint Health Test", () => {
    it("Server is Tested Successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const Res = yield request.get("/");
        expect(Res.statusCode).toEqual(200);
    }));
});
