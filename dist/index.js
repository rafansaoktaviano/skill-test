"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const countRouter = __importStar(require("./routers"));
//Fizzbuzz
const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
};
fizzBuzz(50);
// Palindrome
const palindrom = (text) => {
    text.toLocaleLowerCase();
    let left = 0;
    let right = text.length - 1;
    while (left < right) {
        if (text[left] !== text[right])
            return console.log(`${text} It's not a palindrome`);
        left++;
        right--;
    }
    return console.log(`${text} is a palindrome`);
};
palindrom("rafansa");
app.use("/api", countRouter.countRouter);
app.get("/", (req, res) => {
    res.send("working");
});
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const statusMessage = err.message || "Error";
    return res.status(statusCode).send({
        isError: true,
        message: statusMessage,
        data: null,
    });
});
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`);
});
