"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthcheck = express_1.default.Router();
healthcheck.get("/", (req, res) => {
    if (res.statusCode == 200) {
        res.send(`Connected to the server successuflly , </br> Please insert resize image Link with the width and height </br>
        Example :<a href=http://localhost:3000/image?filename=fjord&width=180&height=100 > Click Here </a>`);
    }
});
exports.default = healthcheck;
